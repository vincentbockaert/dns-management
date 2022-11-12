
var REG_NONE = NewRegistrar('none');    // No registrar.
var DSP_CLOUDFLARE = NewDnsProvider("cloudflare");

DEFAULTS(
    CF_PROXY_DEFAULT_OFF
)


// Domains:

D('schaakclublievegem.be', REG_NONE, DnsProvider(DNS_BIND),
    A('@', '188.166.48.83', CF_PROXY_ON),
    AAAA('@','2a03:b0c0:2:d0::d0d:1', CF_PROXY_ON),
    CNAME('www','schaakclublievegem.be'),
    TXT('_dmarc','v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;'), // indicate reject all
    TXT('*._domainkey','v=DKIM1; p='), // indicate domain does not have a DKIM key, no signing at all
    TXT('@','v=spf1 -all'), // indicate no spf is set up, hence no authorized senders
);

