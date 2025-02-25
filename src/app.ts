import { ResizeSensor } from 'css-element-queries'
import type * as Pixi from 'pixi.js'

declare const PIXI: typeof Pixi

const { Application, Assets, GL_INTERNAL_FORMAT, loadKTX, Sprite, Text, Texture, WebGLRenderer } = PIXI

class Game {
	private readonly BG_COLOR = 0x1e1e1e
	private readonly WIDTH = 800
	private readonly HEIGHT = 600
	private app!: Application
	private background: Sprite | undefined
	private sprite: Sprite | undefined
	private text: Text | undefined
	private loadingOverlay: HTMLElement | undefined

	async init(): Promise<void> {
		this.app = new Application()

		await this.app.init({
			background: this.BG_COLOR,
			width: this.WIDTH,
			height: this.HEIGHT,
			hello: true,
		})

		const canvasContainer = document.getElementById('game-container') as HTMLDivElement
		canvasContainer.appendChild(this.app.canvas)

		this.setupResizing()

		this.loadingOverlay = document.getElementById('loading-overlay') as HTMLElement

		if (this.app.renderer instanceof WebGLRenderer) {
			this.logSupportedWebglExtensions(this.app.renderer.gl)
		}
	}

	private setupResizing(): void {
		const resize = (size: { width: number; height: number }) => {
			const w = Math.min(size.width, this.WIDTH)
			const h = Math.min(size.height, this.HEIGHT)

			const scale = Math.min(w / this.WIDTH, h / this.HEIGHT)

			const newWidth = Math.round(this.WIDTH * scale)
			const newHeight = Math.round(this.HEIGHT * scale)

			this.app.canvas.style.width = `${newWidth}px`
			this.app.canvas.style.height = `${newHeight}px`
		}

		const canvasContainer = document.getElementById('game-container') as HTMLDivElement

		new ResizeSensor(canvasContainer, (size) => resize(size))

		resize(canvasContainer.getBoundingClientRect())
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

		try {
			const texture = await Assets.load('textures/robot.astc_4x4.ktx')

			// Remove loading overlay after successful load
			this.loadingOverlay?.remove()

			this.addBackground()
			this.addAstcTexture(texture)
			this.addHintText()

			window.addEventListener('keydown', (event: KeyboardEvent) => {
				if (event.key === 'w') {
					this.loseWebglContext()
				}
			})

			this.app.stage.interactive = true
			this.app.stage.on('pointerdown', () => this.loseWebglContext())
		} catch (error) {
			console.error('Failed to load texture:', error)
			if (this.loadingOverlay) {
				this.loadingOverlay.innerHTML =
					'<div style="color: white; font-family: monospace;">Error loading texture</div>'
			}
		}
	}

	private addBackground(): void {
		this.background = new Sprite(Texture.WHITE)
		this.background.width = this.app.screen.width
		this.background.height = this.app.screen.height
		this.background.tint = this.BG_COLOR
		this.app.stage.addChild(this.background)
	}

	private async addAstcTexture(texture: Texture): Promise<void> {
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
