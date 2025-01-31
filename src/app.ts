import { Application, Assets, GL_INTERNAL_FORMAT, loadKTX, Sprite, Text, Texture, WebGLRenderer } from 'pixi.js'

class Game {
	private readonly BG_COLOR = 0x1e1e1e
	private app: Application
	private background: Sprite | undefined
	private sprite: Sprite | undefined
	private text: Text | undefined

	async init(): Promise<void> {
		this.app = new Application()

		await this.app.init({
			background: this.BG_COLOR,
			width: 800,
			height: 600,
			hello: true,
		})

		const canvasContainer = document.getElementById('game-container') as HTMLDivElement
		canvasContainer.appendChild(this.app.canvas)

		if (this.app.renderer instanceof WebGLRenderer) {
			this.logSupportedWebglExtensions(this.app.renderer.gl)
		}
	}

	private logSupportedWebglExtensions(gl: WebGLRenderingContext): void {
		// List of WebGL compressed texture extensions to check
		const compressedTextureExtensions = [
			'WEBGL_compressed_texture_astc',
			'WEBGL_compressed_texture_etc',
			'WEBGL_compressed_texture_etc1',
			'WEBGL_compressed_texture_pvrtc',
			'WEBGL_compressed_texture_s3tc',
			'WEBGL_compressed_texture_s3tc_srgb',
		]

		console.group('Supported Compressed Texture Extensions:')
		compressedTextureExtensions.forEach((extName) => {
			const extension = gl.getExtension(extName)
			console.log(
				`${extName.replace('WEBGL_compressed_texture_', '')}: ${extension ? 'Supported ✅' : 'Not supported ❌'}`
			)
		})
		console.groupEnd()

		console.groupCollapsed('Supported Compressed Texture Formats:')
		const formats = gl.getParameter(gl.COMPRESSED_TEXTURE_FORMATS)
		formats.forEach((format: number) => {
			const formatName = (GL_INTERNAL_FORMAT[format] || 'Unknown').replace('COMPRESSED_', '')
			console.log(`${format} (0x${format.toString(16).toUpperCase()}) ${formatName}`)
		})
		console.groupEnd()
	}

	public async start(): Promise<void> {
		Assets.loader.parsers.push(loadKTX as any)

		this.addBackground()
		this.addAstcTexture()
		this.addHintText()

		window.addEventListener('keydown', (event: KeyboardEvent) => {
			if (event.key === 'w') {
				this.loseWebglContext()
			}
		})

		this.app.stage.interactive = true
		this.app.stage.on('click', () => {
			this.loseWebglContext()
		})
	}

	private addBackground(): void {
		this.background = new Sprite(Texture.WHITE)
		this.background.width = this.app.screen.width
		this.background.height = this.app.screen.height
		this.background.tint = this.BG_COLOR
		this.app.stage.addChild(this.background)
	}

	private async addAstcTexture(): Promise<void> {
		const texture = await Assets.load('textures/robot.astc_4x4.ktx')

		this.sprite = new Sprite(texture)
		this.sprite.anchor.set(0.5)
		this.sprite.x = this.app.screen.width / 2
		this.sprite.y = this.app.screen.height / 2 - 20
		this.sprite.scale.set(0.5)

		this.app.stage.addChild(this.sprite)
	}

	private addHintText(): void {
		this.text = new Text({
			text: 'Click on stage or press W to lose WebGL context',
			style: {
				fontFamily: 'monospace',
				fontSize: 24,
				fill: 0xffffff,
			},
		})

		this.text.anchor.set(0.5)
		this.text.x = this.app.screen.width / 2
		this.text.y = this.app.screen.height - 50
		this.app.stage.addChild(this.text)
	}

	private loseWebglContext(): void {
		const renderer = this.app.renderer
		if (renderer && renderer instanceof WebGLRenderer) {
			renderer.context.forceContextLoss()
			console.log('forceContextLoss')

			if (this.text) {
				this.text.text = 'WebGL context lost'
			}

			return
		}
	}
}

const game = new Game()

async function startGame() {
	await game.init()
	await game.start()
}

startGame().catch(console.error)
