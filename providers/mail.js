function includeTutanotaMailRecords() {
    var l = [
        MX("@", 0, "mail.tutanota.de."),
        TXT("@", "t-verify=37e68e99bac1229a43bb5ea1ccaa6668"),
        TXT("@", "v=spf1 include:spf.tutanota.de -all"),
        TXT("_dmarc", "v=DMARC1; p=quarantine; adkim=s"),
        CNAME("_mta-sts", "mta-sts.tutanota.de."),
        CNAME("mta-sts", "mta-sts.tutanota.de."),
        CNAME("s1._domainkey", "s1.domainkey.tutanota.de."),
        CNAME("s2._domainkey", "s2.domainkey.tutanota.de.")
    ]
    return l
}

function includeFastmailMailRecords() {
    var l = [
        // mx
        MX("@", 10, "in1-smtp.messagingengine.com."),
        MX("@",20,"in2-smtp.messagingengine.com."),
        // dkim
        CNAME("fm1._domainkey","fm1.vincentbockaert.xyz.dkim.fmhosted.com."),
        CNAME("fm2._domainkey","fm2.vincentbockaert.xyz.dkim.fmhosted.com."),
        CNAME("fm3._domainkey","fm3.vincentbockaert.xyz.dkim.fmhosted.com."),
        // spf
        TXT("@","v=spf1 include:spf.messagingengine.com -all")
    ]
    return l
}