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