function includeTutanotaMailRecords() {
    var records = [
        MX("@", 0, "mail.tutanota.de."),
        TXT("@", "t-verify=37e68e99bac1229a43bb5ea1ccaa6668"),
        TXT("@", "v=spf1 include:spf.tutanota.de -all"),
        TXT("_dmarc", "v=DMARC1; p=quarantine; adkim=s"),
        CNAME("_mta-sts", "mta-sts.tutanota.de."),
        CNAME("mta-sts", "mta-sts.tutanota.de."),
        CNAME("s1._domainkey", "s1.domainkey.tutanota.de."),
        CNAME("s2._domainkey", "s2.domainkey.tutanota.de.")
    ]
    return records
}

function includeProtonMailRecords() {
    var records = [
        MX("@", 10, "mail.protonmail.ch."),
        MX("@", 20, "mailsec.protonmail.ch."),
        SPF("@", "v=spf1 include:_spf.protonmail.ch mx -all"),
        CNAME("protonmail._domainkey", "protonmail.domainkey.daxdwij3h22rp3mr4kvkeokuurdra4if6ikhm2ndtbjr4gc54hbsq.domains.proton.ch."),
        CNAME("protonmail2._domainkey", "protonmail2.domainkey.daxdwij3h22rp3mr4kvkeokuurdra4if6ikhm2ndtbjr4gc54hbsq.domains.proton.ch."),
        CNAME("protonmail3._domainkey", "protonmail3.domainkey.daxdwij3h22rp3mr4kvkeokuurdra4if6ikhm2ndtbjr4gc54hbsq.domains.proton.ch."),
    ]
    return records
}

function includeSimpeLogin() {

    var sl = "simplelogin";
    var base = ".vincentbockaert.xyz.";

    var records = [
        MX(sl, 10, "app." + sl + base),
        A("app." + sl, "45.79.251.178"),
        TXT("dkim._domainkey." + sl, "v=DKIM1; k=rsa; p=MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA8wIm5EMmhzxjICqCANVpUejgTAfsRyFUL4hRi22v8Ols0fUutlt26AK68gkyVrGFG2edOV4S9/zH1gROwBWy5yE+gRkwNsKncWpVlVpkdJPYIGVKiF2fq29cOYNC6Q44BjEdziX9SexRxKulnNbpvPUX8TB06wcxWLkUNce62Oox66qkPfc6nCuzJBk8oAGerR0NPO8TqUAHZhtvM1q13pvkezklsQGq2WTHaS4uW/0LAf+D4toKUhN7n3oe7nXLPWlkxamK41QipbGMrD3kQt2ZuHnsOThaWzN3sQlFs35sbEpit9oDTEkUXO6Bd/p7BLRpbfvNdbW8bpzpMAeXfwIDAQAB"),
        TXT(sl, "v=spf1 mx ~all"),
        TXT("_dmarc." + sl, "v=DMARC1; p=quarantine; adkim=r; aspf=r")
    ]

    return records
}

function includeFastmailMailRecords(domain) {
    var records = [
        // mx
        MX("@", 10, "in1-smtp.messagingengine.com."),
        MX("@", 20, "in2-smtp.messagingengine.com."),
        // dkim
        CNAME("fm1._domainkey", "fm1." + domain + ".dkim.fmhosted.com."),
        CNAME("fm2._domainkey", "fm2." + domain + ".dkim.fmhosted.com."),
        CNAME("fm3._domainkey", "fm3." + domain + ".dkim.fmhosted.com."),
        // spf
        TXT("@", "v=spf1 include:spf.messagingengine.com -all")
    ]
    return records
}