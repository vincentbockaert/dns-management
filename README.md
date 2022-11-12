# dns management via DNSControl :)

For how to configure the records:
- https://stackexchange.github.io/dnscontrol/js

## how to crud records?

**Step 1**:

- modify directly in dnsconfig _(please don't)_
- "wrap" provider/common services like mail provider records in a [function for reusability](https://github.com/vincentbockaert/dns-management/blob/main/providers/mail.js)
- put your domain/zone under the zones folder with file-name = zone-name

**Step 2**:

Create a PR, the GitHub Workflow will validate (check & preview the changes), once merged a final workflow picks it up applies the changes.

> :warning: local runs are last-resort, to be kept for emergency/worst-case-scenario's only

## local run with 1Password

```bash
# not a bad idea to check you're actually logged in :)
op run --env-file=".env" -- dnscontrol preview 
# apply if happy with changes
op run --env-file=".env" -- dnscontrol push
```

