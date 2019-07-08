import './sw.js'

// setup dependencies
import '@ecomplus/storefront-renderer'
import '@ecomplus/shopping-cart'

// main components
import './src/header'

// async load
import('./src/icons')
// import scripts by page
const $main = document.getElementById('__main')
if ($main && $main.dataset.import) {
  import('./src/' + $main.dataset.import)
} else {
  // import general utils only
  import('./src/utils')
}

// Alterações personalizadas
<script> jQuery(document).ready(function(a) { 
  if (a(".ecom-navbar__nav.shadow.container-fluid.st-block-primary.font-weight-bold").length) { 
    var content = jQuery("ecom-navbar__nav.shadow.container-fluid.st-block-primary.font-weight-bold")
    .html();jQuery('#barraTopo .conteiner .row-fluid')
    .html('<div class="ecom-navbar__nav.shadow.container-fluid.st-block-primary.font-weight-bold">'+content+'</div>') 
  } }); </script>
