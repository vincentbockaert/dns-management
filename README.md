# dns management via DNSControl :)

For how to configure the records:
- https://stackexchange.github.io/dnscontrol/js

## local run with 1Password

```bash
# not a bad idea to check you're actually logged in :)
op run --env-file=".env" -- dnscontrol preview 
# apply if happy with changes
op run --env-file=".env" -- dnscontrol push
```

