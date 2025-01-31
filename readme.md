# PixiJS WebGL Context Restoration Issue

This repository demonstrates an issue with PixiJS when handling WebGL context loss and restoration. Specifically, during the context restoration process, the following WebGL warning occurs `WebGL: INVALID_ENUM: compressedTexImage2D: invalid format`.

## Issue Description

When using **ASTC textures** and the WebGL context is lost, PixiJS fails to properly restore the textures. During the context restoration process, an invalid warning occurs when attempting to reload the ASTC compressed textures.

The warning appears in the following call stack:

1. upload @ GlUploadCompressedTextureResource.ts:86
2. onSourceUpdate @ GlTextureSystem.ts:296
3. _initSource @ GlTextureSystem.ts:230
4. getGlSource @ GlTextureSystem.ts:362
5. bindSource @ GlTextureSystem.ts:143
6. [... additional rendering pipeline calls]

## Steps to Reproduce

1. Load an ASTC compressed texture in your PixiJS application
2. Trigger a WebGL context loss (this can happen naturally or be forced via `gl.getExtension('WEBGL_lose_context').loseContext()`)
3. During context restoration, the warning appears in the console

## Environment

- Browser: latest Chrome / Safari
- PixiJS Version: 8.7.3

## Technical Details

The error suggests that during texture restoration after a context loss, PixiJS is attempting to use an invalid format when calling `compressedTexImage2D` with ASTC textures. This could indicate:

1. The ASTC compressed texture format is not being properly revalidated after context restoration
2. The format enum value for ASTC textures is incorrect during the restoration process
3. The WebGL extension for ASTC textures (`WEBGL_compressed_texture_astc`) may need to be re-acquired after context loss

## Additional Context

This issue specifically occurs during the WebGL context restoration process when using ASTC compressed textures. The error appears to be related to how PixiJS handles compressed texture format validation and extension availability after a context loss.