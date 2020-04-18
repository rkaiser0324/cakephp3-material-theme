var pageId = document.body.getAttribute('id');

window.CAKE = window.CAKE || {};

window.CAKE.pages = window.CAKE.pages || {};

if (CAKE.pages && CAKE.pages[pageId]) {
	CAKE.pages[pageId].run();
}
