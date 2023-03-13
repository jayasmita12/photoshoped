export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["arrow-right-solid.svg","favicon.png","google.svg","menubar-icon.svg","photoshoped-logo.svg","photoshopedLogo.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":{"file":"_app/immutable/entry/start.e97d73da.js","imports":["_app/immutable/entry/start.e97d73da.js","_app/immutable/chunks/index.9d29f9df.js","_app/immutable/chunks/singletons.bb00a249.js","_app/immutable/chunks/index.0d0bf438.js","_app/immutable/chunks/paths.d09513ed.js"],"stylesheets":[],"fonts":[]},"app":{"file":"_app/immutable/entry/app.c8a9ab25.js","imports":["_app/immutable/entry/app.c8a9ab25.js","_app/immutable/chunks/index.9d29f9df.js"],"stylesheets":[],"fonts":[]}},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js'),
			() => import('./nodes/7.js'),
			() => import('./nodes/8.js'),
			() => import('./nodes/9.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/magic-art-single",
				pattern: /^\/magic-art-single\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 5 },
				endpoint: null
			},
			{
				id: "/magic-art",
				pattern: /^\/magic-art\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 4 },
				endpoint: null
			},
			{
				id: "/photoMagic",
				pattern: /^\/photoMagic\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/photoMagic/img2img",
				pattern: /^\/photoMagic\/img2img\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/photoMagic/inpainting",
				pattern: /^\/photoMagic\/inpainting\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/your-model",
				pattern: /^\/your-model\/?$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 9 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
