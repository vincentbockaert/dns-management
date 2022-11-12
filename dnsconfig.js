
var REG_NONE = NewRegistrar('none');    // No registrar.
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");

DEFAULTS(
    CF_PROXY_DEFAULT_OFF
)

// recursively load zones & providers
require_glob("./providers")
require_glob("./zones/")

