# <font color=Black>Spartan DID</font>

<br/>

## <font color=Black><span id="1">Overview</span></font>
---

With blockchain technology as the cornerstone and W3C DID as the specification, Spartan DID Services achieve decentralized on-chain mapping of real entities, thus achieving the ability to provide digital identity and digital credential interaction for individuals/organizations.



<br/>

## <font color=Black><span id="2">Roles</span></font>
---

In the DID ecosystem, there are three roles: User, Issuer, and Verifier.

- **User:** Any individual/organization/entity with a digital identity on the chain. Any entity object can create and manage its DID through the developer’s own project.

- **Issuer:** The individual or organization that can issue the digital credentials. For example, a university can issue a digital diploma to a student; then the university is an issuer.

- **Verifier:** Also known as a business party, is an individual or organization that uses digital credentials. After being authorized by the user, the verifier can verify the identity of the user or their digital credentials. For example, when a company hires someone, it needs to verify his college diploma, then the company is a verifier.


<img src='img/didroles.png' style='width:600px;' alt='didroles' title='didroles'>


<br/>

## <font color=Black><span id="3">Components</span></font>
---

The DID system consists of three components: SDK, Service and Smart Contract. The SDK can be integrated into the developer’s own project; Service is responsible for logic processing and communication with nodes; the smart contract is deployed on the chain, and the methods in the contract are called by the DID Service.


<br/>

## <font color=Black><span id="4">Functions and features</span></font>
---


- Deployed on the Spartan-I Chain (NC Ethereum), the DID Service builds a decentralized digital identity management system, which facilitates autonomous participation and affirmative collaboration among users, issuers, and verifiers.

- Provide a unified decentralized digital identity management, including identifier creation, update, and verification functions.

- Provide mechanisms for issuance, authorization, verification, and revocation of user data credentials.

- Provide the SDK that access to API services, integrate object encapsulation, signature, verification, and other methods for easy docking by developers.



<br/>

> [!Tip|style:flat]

> - For a detailed introduction to DID, Please refer to [**GitHub**](https://github.com/BSN-Spartan/DID/tree/main/docs).

> - And, BSN-Spartan has also completely open sourced IdentityHub, users can install it locally and store their own private data. For more details, Please refer to [**GitHub**]( https://github.com/BSN-Spartan/IdentityHub).



<br/>
<br/>
<br/>