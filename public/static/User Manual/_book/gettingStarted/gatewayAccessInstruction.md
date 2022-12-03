# <font color=Black>Gateway Access Instruction</font>



<br/>

## <font color=Black><span id="1">Key Parameters</span></font>
---

- **Access key:** `accessKey`

- **Target chain type:** `chainType`

- **Protocol:** `protocol`


<br/>


## <font color=Black><span id="2">Gateway Request Format</span></font>
---

### <font color=Black><span id="2.1">HTTP Request</span></font>

- `https://[domain:port]/api/[accessKey]/[chainType]/rpc/[chain_path]`

> [!Note|style:flat]

> - *`[chain_path]` is not required, can be null.*

- **Example:** `https://[domain:port]/api/015416c06ef74ac38a92521792f97e7d/spartanone/rpc`

<br/>

### <font color=Black><span id="2.2">WebSocket Request</span></font>

- `wss://[domain:port]/api/[accessKey]/[chainType]/ws/[chain_path]`

> [!Note|style:flat]

> - *`[chain_path]` is not required, can be null.*

- **Example:** `wss://[ domain:port]/api/015416c06ef74ac38a92521792f97e7d/spartanone/ws`

<br/>

### <font color=Black><span id="2.3">gRPC Request</span></font>

`[domain:port]`

**Request header:**

- x-api-key: `[accessKey]`

- x-api-chain-type: `[chainType]`


> [!Note|style:flat]

> - *The access information can be found in the notification email of Network Access Information.*




<br/>
<br/>
<br/>