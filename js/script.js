var drawerE1 = document.querySelector('.mdc-temporary-drawer');
var MDCTemporaryDrawer = mdc.drawer.MDCTemporaryDrawer;
var drawer = new MDCTemporaryDrawer(drawerE1);

document.querySelector('#drawer').addEventListener('click', function(){
	drawer.open = true;
});

drawerE1.addEventListener('MDCTemporaryDrawer:open', function() {
        console.log('Received MDCTemporaryDrawer:open');
      });
      drawerE1.addEventListener('MDCTemporaryDrawer:close', function() {
        console.log('Received MDCTemporaryDrawer:close');
      });