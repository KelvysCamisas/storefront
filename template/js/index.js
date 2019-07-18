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

//Fim

//Chat WhatsApp
<script> $('body._ecom-store').append('<a href="https://web.whatsapp.com/send?1=pt_BR&phone=554491808130" target="_blank" id="ws_icon_chat" title="Atendimento via WhatsApp"><img src="https://cdn.e-com.club/s/www.kelvys.com.br/uploads/whatsapp_kelvys.png"></a>');
if($(window).width() < 480) {
$("#ws_icon_chat").attr("href", "https://api.whatsapp.com/send?1=pt_BR&phone=554491808130");
} </script>
//Fim
