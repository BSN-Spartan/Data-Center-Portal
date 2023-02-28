# <font color=Black>Gateway Access Instruction</font>



<br/>

## <font color=Black><span id="1">Key Parameters</span></font>
---

- **Access key:** `accessKey`, created in the portal, the user cannot access the blockchain without the key.

- **Target chain type:** `chainType`, configured in the data center system, the message cannot be forwarded if it's wrong.

- **Protocol:** `protocol`, message-passing protocol, e.g. http, grpc.

<br/>


## <font color=Black><span id="2">Gateway Request Format</span></font>
---

### <font color=Black><span id="2.1">HTTP Request</span></font>

- `https://[domain:port]/api/[accessKey]/[chainType]/rpc/[chain_path]`

- **Example:** `https://[domain:port]/api/015416c06ef74ac38a92521792f97e7d/spartanone/rpc`


<br/>

### <font color=Black><span id="2.2">WebSocket Request</span></font>

- `wss://[domain:port]/api/[accessKey]/[chainType]/ws/[chain_path]`

- **Example:** `wss://[ domain:port]/api/015416c06ef74ac38a92521792f97e7d/spartanone/ws`

<br/>

### <font color=Black><span id="2.3">gRPC Request</span></font>

`[domain:port]`

**Request header:**

- x-api-key: `[accessKey]`

- x-api-chain-type: `[chainType]`

<br/>

> [!Note|style:flat]

> - *`[domain]`: domain name, you can apply it by yourself.*

> - *`[port]`: the port number to distinguish different protocols, e.g. http, grpc, you can define it yourself.*

> - *`[chain_path]`: is not required, can be null, user can add this parameter if needed.*

> - *The access information can be found in the notification email of Network Access Information.*





<br/>
<br/>
<br/>