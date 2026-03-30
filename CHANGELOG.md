## [v1.2.1](https://github.com/jrl84/amazon-sp-api/tree/v1.2.1) (2026-03-30)

[Full Changelog](https://github.com/jrl84/amazon-sp-api/compare/v1.2.0...v1.2.1)

**Notable changes:**

- Added new orders endpoint (v2026-01-01)
- Added new government invoice (BR only) operations for invoices endpoint
- Fixed multiple TS issues

**Commits:**

- Added return_as_payload option that will return the result as a "payload" key/value --> then also restore_rate is included (feature request [\#323](https://github.com/jrl84/amazon-sp-api/issues/323)) ([`96e8bf8`](https://github.com/jrl84/amazon-sp-api/commit/96e8bf844b4d993fcd2429f1c61d0db976e99e54))
- Fix issue [\#318](https://github.com/jrl84/amazon-sp-api/issues/318) ([`68e1790`](https://github.com/jrl84/amazon-sp-api/commit/68e179044330e525b6be6920535ad4f543930025))
- Optimized types for operations with multiple versions ([`606a7d1`](https://github.com/jrl84/amazon-sp-api/commit/606a7d18bf4ed49ec89bc08a41626539e86ab324))
- Added types for invoices endpoint ([`78eee26`](https://github.com/jrl84/amazon-sp-api/commit/78eee26376d3093ae56344707cac59d99e555975))
- Added new keys to finances types ([`4d563af`](https://github.com/jrl84/amazon-sp-api/commit/4d563af7b56d9776128e6b42f33ffbfa7c2c9a65))
- Removed deprecated reports types ([`c642d0a`](https://github.com/jrl84/amazon-sp-api/commit/c642d0a12226df62ee603c1a554b7e6d044d5385))
- Added new index.d.ts to typings/operations to fix tsconfig error ([`8091669`](https://github.com/jrl84/amazon-sp-api/commit/8091669c7c36208f5b2ea8d2570be9a1bd4b006f))
- Added new invoice operations ([`2cd9bf3`](https://github.com/jrl84/amazon-sp-api/commit/2cd9bf386031e8865912235c4ebb0ad0071f682d))
- Removed the unnecessary BaseResponse interface ([`5c5d5d6`](https://github.com/jrl84/amazon-sp-api/commit/5c5d5d6bb22ffab41c1b0661c0c8b567258b9cad))
- Added new order endpoints typings ([`1fe7e5a`](https://github.com/jrl84/amazon-sp-api/commit/1fe7e5a97702613b4cb78a79606d335594f93e8f))
- Fixed wrong restore rates in orders api ([`bf70624`](https://github.com/jrl84/amazon-sp-api/commit/bf706243d86750e61c523f8a0047d14d9924012d))
- Removed unused typings from deprecated v0 catalogItems version ([`d481332`](https://github.com/jrl84/amazon-sp-api/commit/d481332082b9bb35141b849d678a05630557b10b))
- Fixed catalogItems typings to work with the same interface for 2022 and 2020 version ([`eb35a01`](https://github.com/jrl84/amazon-sp-api/commit/eb35a01bb057d64a2df2c34ae6640989cca256f7))
- Changed wrong key names "interfaceifications" to "classifications" in catalogItems typings ([`ec4d805`](https://github.com/jrl84/amazon-sp-api/commit/ec4d805ce3a5c2ca87c6c513464ba1690ed7ca9a))

**Merged pull requests:**

- feat: add the Orders API v2026-01-01 [\#328](https://github.com/jrl84/amazon-sp-api/pull/328) ([wangjue666](https://github.com/wangjue666))
- feat\(types\): add typings for downloadStream [\#326](https://github.com/jrl84/amazon-sp-api/pull/326) ([NoelDeMartin](https://github.com/NoelDeMartin))
- feat\(catalogItems\): add response type [\#309](https://github.com/jrl84/amazon-sp-api/pull/309) ([Roman991](https://github.com/Roman991))

## [v1.2.0](https://github.com/jrl84/amazon-sp-api/tree/v1.2.0) (2025-11-11)

[Full Changelog](https://github.com/jrl84/amazon-sp-api/compare/v1.1.7...v1.2.0)

**Notable changes:**

- Added external fulfillment endpoints

**Commits:**

- Updated dependencies ([`d0f34ce`](https://github.com/jrl84/amazon-sp-api/commit/d0f34ce830f8e70fc65286986fb2a8880c84bd6f))
- Added new external fulfillment endpoints ([`6501814`](https://github.com/jrl84/amazon-sp-api/commit/6501814f9a074ec676a9de7229878c51f20b6941))

**Merged pull requests:**

- feat\(types\): add typings for listTransactions [\#325](https://github.com/jrl84/amazon-sp-api/pull/325) ([NoelDeMartin](https://github.com/NoelDeMartin))

## [v1.1.7](https://github.com/jrl84/amazon-sp-api/tree/v1.1.7) (2025-09-12)

[Full Changelog](https://github.com/jrl84/amazon-sp-api/compare/v1.1.6...v1.1.7)

**Notable changes:**

- Added customerFeedback, sellerWallet and transfers endpoints
- Added sellerWallet endpoint
- Changed package.json to new repository path

**Commits:**

- Updated package.json to new username and path ([`8c3671a`](https://github.com/jrl84/amazon-sp-api/commit/8c3671a25531fd91f32505080fae894acf0ec546))
- Added new sellerWallet endpoint ([`50efa7b`](https://github.com/jrl84/amazon-sp-api/commit/50efa7b4669eb3b230dfc2ffad67ac2a144dd745))
- Update sellers getAccount restore rate ([`927eb39`](https://github.com/jrl84/amazon-sp-api/commit/927eb3987ca7bdafa6bd4f4d984a39b7ea33002a))
- Added new transfers endpoint ([`6cb0add`](https://github.com/jrl84/amazon-sp-api/commit/6cb0addd4ef21d82286bec112baeb1778b7ff449))
- Added sandbox-only operations to fbaInventory ([`5b5723c`](https://github.com/jrl84/amazon-sp-api/commit/5b5723cd2136ffbaf2552e7659e94325e0143dcb))
- Changed customer feedback endpoint to correct restore rate of 1 ([`85ce2f2`](https://github.com/jrl84/amazon-sp-api/commit/85ce2f27d198a5d03a9cfaf99c007f1a09eac057))
- add customer feedback endpoint ([`f88dab3`](https://github.com/jrl84/amazon-sp-api/commit/f88dab37388942ec066f8784e429d06a36b2f8a1))

**Merged pull requests:**

- Add customer feedback endpoint [\#321](https://github.com/jrl84/amazon-sp-api/pull/321) ([altruer](https://github.com/altruer))

## [v1.1.6](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.6) (2025-04-15)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.1.5...v1.1.6)

**Notable changes:**

- Added new downloadReportStream() function
- Added new operations for endpoints amazonWarehousingAndDistribution, supplySource, vendorDirectFulfillmentShipping, vendorShipments
- Added new vehicles endpoint
- Removed deprecated operations from fulfillmentInbound v0 endpoint
- Added some more missing types (constructor config, .exchange, reports)

**Commits:**

- Added updateSupplySourceStatus operation to supplySource endpoint ([`5047010`](https://github.com/amz-tools/amazon-sp-api/commit/50470100cebc53f036aea5f0e913ce09d308e607))
- Added new vendorShipments operations ([`e16d8a6`](https://github.com/amz-tools/amazon-sp-api/commit/e16d8a6eaf4abd54afa1a45273149dd5823edaee))
- Added createContainerLabel operation to vendorDirectFulfillmentShipping endpoint ([`2e015dc`](https://github.com/amz-tools/amazon-sp-api/commit/2e015dc65fbab3014ce335bee5939b0ef8d641df))
- Removed deprecated v0 fulfillmentInbound operations ([`a80e98f`](https://github.com/amz-tools/amazon-sp-api/commit/a80e98f27c1604a322ee46413d8fdc82c7c9f682))
- Added new vehicles endpoint ([`75939b7`](https://github.com/amz-tools/amazon-sp-api/commit/75939b7c3f5b8b1e396ee50d4b066865cc1f2386))
- Added new AmazonWarehousingAndDistribution operations ([`226fb96`](https://github.com/amz-tools/amazon-sp-api/commit/226fb96c2491e4494ec0dacfe376188e7d41f516))
- Added ExchangeResponse type (Fixes #224) ([`ebee3d1`](https://github.com/amz-tools/amazon-sp-api/commit/ebee3d15630cf1365c4e71f9dec7b56e74db5ce2))
- Added all possible constructor config options to types (also fixes #264) ([`f57e73a`](https://github.com/amz-tools/amazon-sp-api/commit/f57e73a8c5dd4aaa5831cc7545b4ce6a4ca50b85))
- Added new report types (fixes #311) ([`6520762`](https://github.com/amz-tools/amazon-sp-api/commit/6520762f54eadf63ff0ab052a8e8232d7db96ab3))
- Fix for #310 ([`06f984a`](https://github.com/amz-tools/amazon-sp-api/commit/06f984aa52efdcd99b11a5166f556a83278e828b))
- Added test for downloadReportStream ([`391ae64`](https://github.com/amz-tools/amazon-sp-api/commit/391ae64404de2fef0365ecddf2821340174ee1b7))
- Update Readme to include Download reports as stream ([`740c2d7`](https://github.com/amz-tools/amazon-sp-api/commit/740c2d7515d958cba3eec768f824d9fa98ea966f))
- Removed uploadStream for now and added unzip as option to downloadReportStream (identical to downloadReport) ([`76800e7`](https://github.com/amz-tools/amazon-sp-api/commit/76800e79bd6e43d1291645cc5eb85462d32f076f))
- Fix the website url. ([`3b535e5`](https://github.com/amz-tools/amazon-sp-api/commit/3b535e5baaa63bf956b9f2545b6b93f984ce8c58))
- Using erasable syntax instead of enums ([`8ea71f7`](https://github.com/amz-tools/amazon-sp-api/commit/8ea71f70d482b4278249931c5ba7d838a1db109a))
- Added downloadReportStream method ([`8a8a70c`](https://github.com/amz-tools/amazon-sp-api/commit/8a8a70cd4d7d0b7f921d10750b7f8208e0f8e6ec))
- Changed streamToString to use \_getStreamChunks and use existing decoding method, added TODOs to reporting tests ([`8ecac8c`](https://github.com/amz-tools/amazon-sp-api/commit/8ecac8c9d96451b27de98c9d244077982b789d78))
- implement streamDownload() returning a stream ([`9c471a6`](https://github.com/amz-tools/amazon-sp-api/commit/9c471a6e2c9d352e6ed2d040b4a6d0d3d54c4766))

**Merged pull requests:**

- Fix the website url. [\#315](https://github.com/amz-tools/amazon-sp-api/pull/315) ([IonicaBizau](https://github.com/IonicaBizau))
- Using erasable syntax instead of enums [\#314](https://github.com/amz-tools/amazon-sp-api/pull/314) ([jakeleventhal](https://github.com/jakeleventhal))
- implement streamDownload\(\) returning a stream [\#306](https://github.com/amz-tools/amazon-sp-api/pull/306) ([danielecr](https://github.com/danielecr))

## [v1.1.5](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.5) (2025-01-23)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.1.4...v1.1.5)

**Notable changes:**

- Added new endpoint version: finances (2024-06-19) with listTransactions operation
- Added searchListingsItems operation to listingsItems (2021-08-01) endpoint
- Added changelog
- Added prettier formatting and reformatted all files

**Commits:**

- Added prettier to project and reformatted all files ([`0432e58`](https://github.com/amz-tools/amazon-sp-api/commit/0432e58e79e6fe49fbdeac9d433087ea552397e9))
- Added changelog ([`0359bee`](https://github.com/amz-tools/amazon-sp-api/commit/0359beee1b0beb0115ac210dac25318df1aa3ad0))
- Added test for searchListingsItems ([`0324499`](https://github.com/amz-tools/amazon-sp-api/commit/03244999f5a5e3117fa52df7bb92f4148aac0bf6))
- Minor reformatting and test for listTransactions operation ([`954b547`](https://github.com/amz-tools/amazon-sp-api/commit/954b547946273c759974bccf47acf877e6c1631f))
- fix tab ([`6b72598`](https://github.com/amz-tools/amazon-sp-api/commit/6b72598ae9373b78f78260e0c05b3419ab56a9fd))
- listings items support searchListingsItems operation ([`87e9cb1`](https://github.com/amz-tools/amazon-sp-api/commit/87e9cb1552e6e72c4662ddb5bc92cd523f7f6e4b))
- Add new version of finance api ([`0d2cb55`](https://github.com/amz-tools/amazon-sp-api/commit/0d2cb55d7267f29921698c64ff0ab955ac4964da))
- Add new version of finance api ([`5a59634`](https://github.com/amz-tools/amazon-sp-api/commit/5a596342093de357e111d27df35446df0c105882))

**Merged pull requests:**

- listings items support searchListingsItems operation [\#305](https://github.com/amz-tools/amazon-sp-api/pull/305) ([altruer](https://github.com/altruer))
- Patch finance api [\#303](https://github.com/amz-tools/amazon-sp-api/pull/303) ([brknesn](https://github.com/brknesn))

## [v1.1.4](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.4) (2024-11-25)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.1.3...v1.1.4)

**Notable changes:**

- Minor bugfix for new appIntegrations endpoint not working correct due to missing import

**Commits:**

- Fixed missing import ([`07bffeb`](https://github.com/amz-tools/amazon-sp-api/commit/07bffebdb7ba7dd461d35965ae925e0fb0257b2e))

## [v1.1.3](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.3) (2024-11-18)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.1.2...v1.1.3)

**Notable changes:**

- Added new endpoints: appIntegrations and invoices
- Added request object to result if raw_result is set to true
- Added types: productTypeDefinitions, apiPath
- Extend timeout logic to refreshAccessToken

**Commits:**

- updated dependencies ([`890aff9`](https://github.com/amz-tools/amazon-sp-api/commit/890aff900df639bf22d6b7ffc93b7a19236fbb86))
- Updated throttling for getEligibleShippingServices and createShipment ([`44089d6`](https://github.com/amz-tools/amazon-sp-api/commit/44089d62fe8a1d0d465ef3cb8c4baf10dffa2554))
- Added new appIntergrations endpoint ([`c5851c1`](https://github.com/amz-tools/amazon-sp-api/commit/c5851c16893791249d0b10dcc75f6c949ad96c17))
- Added new Invoices API for Brazil ([`6bb5057`](https://github.com/amz-tools/amazon-sp-api/commit/6bb50572c7798634504a8bc7a4dca1eb36ccd50d))
- Updated Readme to include information about request object being part of result when raw_result is set to true ([`e7bacf4`](https://github.com/amz-tools/amazon-sp-api/commit/e7bacf42497a620d7ac51bfe1ec4656814e42a84))
- Wrapped request object body parsing in try/catch for cases where body is not valid json (see https://github.com/amz-tools/amazon-sp-api/commit/9e42c318dd966dcfdae9dd7f4522d262ece2fa71#commitcomment-148204934) ([`e48a3b3`](https://github.com/amz-tools/amazon-sp-api/commit/e48a3b380c6e0bfe71d82a82e200317175c99aa1))
- return raw request as part of response ([`b956760`](https://github.com/amz-tools/amazon-sp-api/commit/b9567601563316239885903f55f9511a6206c842))
- improve ReqParams typing ([`710b6d4`](https://github.com/amz-tools/amazon-sp-api/commit/710b6d45625ae292cc515626b2c1f34b1cd2d53b))
- return requestObject ([`5ed2c5e`](https://github.com/amz-tools/amazon-sp-api/commit/5ed2c5eab634cbdd07e14668a485f1265741dfe6))
- feat(types): add typings for productTypeDefinitions ([`e891d9f`](https://github.com/amz-tools/amazon-sp-api/commit/e891d9fda8071f1e556a3b21a42fcfe8f95a4704))
- When timeout options are specified for an API call, ensure the same timeout is also used for calls to refresh the access_token ([`f1448f4`](https://github.com/amz-tools/amazon-sp-api/commit/f1448f428ce452cbde1c97fcea54131c97111938))
- Added TRANSACTION_UPDATE notificationType ([`7ec4162`](https://github.com/amz-tools/amazon-sp-api/commit/7ec416211fcfb513c76834c3cee3227b0608d916))
- support api_path types ([`b0448bc`](https://github.com/amz-tools/amazon-sp-api/commit/b0448bce9a10b9e5541c9a6c81a9c9c3bf9da959))
- import type ([`d9c9a8f`](https://github.com/amz-tools/amazon-sp-api/commit/d9c9a8f3a6ddd8fb8907f0cf453f05ada649aab9))

**Merged pull requests:**

- Return raw request and improve ReqParams typing [\#302](https://github.com/amz-tools/amazon-sp-api/pull/302) ([cohlar](https://github.com/cohlar))
- feat\(types\): add typings for productTypeDefinitions [\#301](https://github.com/amz-tools/amazon-sp-api/pull/301) ([paulwer](https://github.com/paulwer))
- Apply timeout options to access_token refresh call [\#299](https://github.com/amz-tools/amazon-sp-api/pull/299) ([colin-brown](https://github.com/colin-brown))
- Added TRANSACTION_UPDATE notificationType [\#298](https://github.com/amz-tools/amazon-sp-api/pull/298) ([tho-masn](https://github.com/tho-masn))

## [v1.1.2](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.2) (2024-10-21)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.1.1...v1.1.2)

**Notable changes:**

- Added new operations to fulfillmentInbound endpoint: listPrepDetails and setPrepDetails
- Modified types: added timeouts (for IReqOptions and DownloadOptions), reportDocumentId (for DownloadDocument)
- Added request data log when debug_log is true

**Commits:**

- Added request data log when debug_log is true ([`9e42c31`](https://github.com/amz-tools/amazon-sp-api/commit/9e42c318dd966dcfdae9dd7f4522d262ece2fa71))
- Added timeouts to IReqOptions ([`6e711e4`](https://github.com/amz-tools/amazon-sp-api/commit/6e711e400abd90eeb5d325534ca3421ea130fe80))
- Changed ProcessingStatus from enum to type to make it easily exportable ([`fe8fbd6`](https://github.com/amz-tools/amazon-sp-api/commit/fe8fbd6ff1fc8fd90ca1ebdd7484b117ad25b0eb))
- Added reportDocumentId optional param, its not used in .download() but when piped through from getReportDocument() its included since Amazon includes it in the response ([`d107d95`](https://github.com/amz-tools/amazon-sp-api/commit/d107d954f1b444b334d67365500a0ac66a35cfae))
- Update feeds.ts ([`ceee127`](https://github.com/amz-tools/amazon-sp-api/commit/ceee127881e1edd16e77a98790af1b02b7570809))
- Update feeds.ts ([`775a360`](https://github.com/amz-tools/amazon-sp-api/commit/775a360b8fd6ed1a62128d306066bc796c7c9756))
- Add new operations ([`672e26a`](https://github.com/amz-tools/amazon-sp-api/commit/672e26a2eecd0c5eb237fb4ec81adb4ea711c7d0))
- Add new endpoints ([`60a3388`](https://github.com/amz-tools/amazon-sp-api/commit/60a33882c681399765a26bb4f9f9ad44b6358fa4))
- Update baseTypes.ts ([`55c89fc`](https://github.com/amz-tools/amazon-sp-api/commit/55c89fca3475c87c6b7d0d6e0a29c4755085af95))
- Update index.d.ts ([`c2d0f0c`](https://github.com/amz-tools/amazon-sp-api/commit/c2d0f0c3e33dd58fa6f6e778cfc7c3c0894d879d))
- Update baseTypes.ts ([`a889f51`](https://github.com/amz-tools/amazon-sp-api/commit/a889f51af25978918daec6402c099f8bf2168306))

**Merged pull requests:**

- Update feeds.ts [\#297](https://github.com/amz-tools/amazon-sp-api/pull/297) ([paulwer](https://github.com/paulwer))
- Fix typescript error [\#296](https://github.com/amz-tools/amazon-sp-api/pull/296) ([paulwer](https://github.com/paulwer))
- Patch fullfillment inbound [\#295](https://github.com/amz-tools/amazon-sp-api/pull/295) ([brknesn](https://github.com/brknesn))
- Fixes \#292 [\#293](https://github.com/amz-tools/amazon-sp-api/pull/293) ([paulwer](https://github.com/paulwer))

## [v1.1.1](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.1) (2024-09-09)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.1.0...v1.1.1)

**Notable changes:**

- Added new operation to sellers endpoint: getAccount
- Added types: downloadReport, Scope
- Removed deprecated sellingpartnerapi::migration scope
- Removed deprecated types for smallAndLight endpoint
- Minor bugfix for wrong api_path in getDocument operation of dataKiosk endpoint

**Commits:**

- Updated depedencies ([`15de6b3`](https://github.com/amz-tools/amazon-sp-api/commit/15de6b3a0b04626ab5ded56d09fe54dd2087bd3d))
- Added sellers.getAccount operation and added sandbox only warning ([`7197954`](https://github.com/amz-tools/amazon-sp-api/commit/71979546bf07ba9953d5967025d75ff7493234f3))
- Added downloadReport typings ([`01cf949`](https://github.com/amz-tools/amazon-sp-api/commit/01cf949c5a8a6b49e6a9a3193bee9edbd7b80982))
- Changed deprecated comment ([`f1e19d1`](https://github.com/amz-tools/amazon-sp-api/commit/f1e19d179d7c1af5642bdf550cd45b72998a8998))
- Removed deprecated sellingpartnerapi::migration scope ([`ace659d`](https://github.com/amz-tools/amazon-sp-api/commit/ace659de26ea2f837fd64f2696e4cf652e9a019c))
- Fixed comma issue ([`37ed42b`](https://github.com/amz-tools/amazon-sp-api/commit/37ed42b93f666e1a50218ba8983aa05716e9af84))
- Bugfix #285 ([`bc8f8c5`](https://github.com/amz-tools/amazon-sp-api/commit/bc8f8c5bbcbcadf8c1e88df60ca239ff19a4fe83))
- Fixed issue #279 ([`c94e2f6`](https://github.com/amz-tools/amazon-sp-api/commit/c94e2f629c3f843836f3c279fdee53aaff4d6f6a))
- Update reports.ts ([`8d758cb`](https://github.com/amz-tools/amazon-sp-api/commit/8d758cb9e5e87edd214bb12a1f433669e1f705f5))
- fix(data-kiosk): incorrect url for data kiosk documents ([`a1c3596`](https://github.com/amz-tools/amazon-sp-api/commit/a1c35967560ff12985244065e12e8044336393ea))
- fix: add scope to ReqParams ([`371ebb9`](https://github.com/amz-tools/amazon-sp-api/commit/371ebb9e643106366af2e41b4c4c06c383e05641))
- chore: create type Scope ([`330342b`](https://github.com/amz-tools/amazon-sp-api/commit/330342b8d87c3bcd11f1326b3c8e225b3b2a8917))
- fix: add sellingpartnerapi::client_credential:rotation scope ([`653cb84`](https://github.com/amz-tools/amazon-sp-api/commit/653cb844f27be4c4506a53c7ff8b044dcf30791e))
- fix: refreshAccessToken typings ([`52971d5`](https://github.com/amz-tools/amazon-sp-api/commit/52971d54ab8d1f61e5c0a5405990421d3293250a))
- allows subscriptions for data kiosk query processing finished notification ([`d12cab7`](https://github.com/amz-tools/amazon-sp-api/commit/d12cab76dc600f31fecd948506f162b4c4a01180))

**Merged pull requests:**

- Fix typescript error [\#287](https://github.com/amz-tools/amazon-sp-api/pull/287) ([paulwer](https://github.com/paulwer))
- fix\(data-kiosk\): incorrect url for data kiosk documents [\#286](https://github.com/amz-tools/amazon-sp-api/pull/286) ([danielbroadhurst](https://github.com/danielbroadhurst))
- fix: refreshAccessToken typings [\#283](https://github.com/amz-tools/amazon-sp-api/pull/283) ([alin-plamadeala](https://github.com/alin-plamadeala))

## [v1.1.0](https://github.com/amz-tools/amazon-sp-api/tree/v1.1.0) (2024-07-23)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.6...v1.1.0)

**Notable changes:**

- Added new endpoints: supplySources, dataKiosk, amazonWarehousingAndDistribution, applicationManagement
- Added new endpoint version: fulfillmentInbound (2024-03-20)
- Added new operations oneClickShipment, getAccessPoints, submitNdrFeedback to shipping (v2) endpoint
- Added new operation sendInvoice to messaging (v1) endpoint
- Added new operations getEligibleShipmentServicesOld, cancelShipmentOld, getAdditionalSellerInputsOld to merchantFulfillment (v0) endpoint
- Added new operation deliveryOffers to fulfillmentOutbound (2020-07-01) endpoint
- Added new operation easyShip to easyShip (2022-03-23) endpoint
- Removed deprecated endpoints: fbaSmallAndLight, authorization

**Commits:**

- Updated dependencies and transformed tests to work with chai 5.x esm-only ([`c5fecd9`](https://github.com/amz-tools/amazon-sp-api/commit/c5fecd9bac05982fccd99b43dd8fafef8333566d))
- Revert "1.1.0" ([`fdcd7de`](https://github.com/amz-tools/amazon-sp-api/commit/fdcd7de9fcc0c3699d7f697732a1bf06f1addb2e))
- Minor fixes for verbatimModuleSyntax ([`c8eaf3d`](https://github.com/amz-tools/amazon-sp-api/commit/c8eaf3d02b1004ca92ded355b88e5682c558ff2a))
- Removed deprecated getInboundGuidance operation ([`6f0fd08`](https://github.com/amz-tools/amazon-sp-api/commit/6f0fd080a2d5017780a013b05c48a4f528569031))
- Removed deprecated fbaSmallAndLight endpoint ([`8a91c27`](https://github.com/amz-tools/amazon-sp-api/commit/8a91c279760c9227be2c5bdc18d32ac23ea1f401))
- Added supplySources endpoint ([`f10937e`](https://github.com/amz-tools/amazon-sp-api/commit/f10937e8adb198d8891100cdb559ac2dd319e4ce))
- Added more operations to shipping v2 endpoint ([`cb01907`](https://github.com/amz-tools/amazon-sp-api/commit/cb01907704eb24d71b7c60d04ca90aa05f97c21e))
- Removed comment as restore rate is now defined in docs for getMyFeesEstimates ([`97aa418`](https://github.com/amz-tools/amazon-sp-api/commit/97aa41887b74d7cc3fca0aaa4e63d0931f483792))
- Added sendInvoice operation to messaging endpoint ([`e61ccc8`](https://github.com/amz-tools/amazon-sp-api/commit/e61ccc843351243f5e904fe64aa20afbc3716953))
- Removed deprecated merchantFulfillment operations ([`8afdf4d`](https://github.com/amz-tools/amazon-sp-api/commit/8afdf4dda686a2301ff7939d3cb8aae2c171711b))
- Added deliveryOffers operation to fulfillmentOutbound endpoint ([`f8712cf`](https://github.com/amz-tools/amazon-sp-api/commit/f8712cf51981c92b460f27e099faf5c78dde2d9c))
- Added createScheduledPackageBulk operation to easyShip endpoint ([`c64090d`](https://github.com/amz-tools/amazon-sp-api/commit/c64090d418eaff4ba04ea526cf2f5ad4b7528bd4))
- Added dataKiosk endpoint ([`8ff6f10`](https://github.com/amz-tools/amazon-sp-api/commit/8ff6f10073b84583bfce612693db0feb9f1cd50b))
- Added AmazonWarehousingAndDistribution endpoint ([`ca4e6b5`](https://github.com/amz-tools/amazon-sp-api/commit/ca4e6b5df081aa77d8fdcd3f5009353a65135f41))
- Added applicationManagement endpoint ([`c2182f7`](https://github.com/amz-tools/amazon-sp-api/commit/c2182f7e7de61463643a594d5494b6b1926a4654))
- Removed deprecated authorization endpoint ([`b31a9d8`](https://github.com/amz-tools/amazon-sp-api/commit/b31a9d8c544e65f917eaad4cc150bff58036ddf9))
- Updated fulfillmentInbound tests for new endpoint ([`9dd0d5b`](https://github.com/amz-tools/amazon-sp-api/commit/9dd0d5bfa0d1995656b7364ec741036264fc679a))
- Added new 2024-03-20 fulfillmentInbound endpoint ([`d0de38d`](https://github.com/amz-tools/amazon-sp-api/commit/d0de38da64494bdd9049e90cc1362a7d393d2bd1))
- import types excplicitly with verbatimModuleSyntax ([`966502f`](https://github.com/amz-tools/amazon-sp-api/commit/966502f6f8a483fc59fb39ccae3b815ebd76383e))

## [v1.0.6](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.6) (2024-03-12)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.5...v1.0.6)

**Notable changes:**

- Added new cancel_after option for .downloadReport which allows to cancel a report creation after X retries
- Removed deprecated getInboundGuidance operation for fulfillmentInbound endpoint
- Added possibility to use a proxy agent
- Added types for sellers endpoint

**Commits:**

- Added new "cancel_after" option for ".downloadReport" which allows to cancel a report creation after X retries ([`b30b24e`](https://github.com/amz-tools/amazon-sp-api/commit/b30b24e92bcc2300306d2c187d327ad10623344b))
- Removed deprecated getInboundGuidance operation ([`fe813e7`](https://github.com/amz-tools/amazon-sp-api/commit/fe813e73c95e38558f6857c5d79b1a8dd8500561))
- Some changes how httpsProxyAgent option is implemented ([`26b428d`](https://github.com/amz-tools/amazon-sp-api/commit/26b428db75b495d39721d19293f7d562ac02a8ed))
- Moved GetMarketplaceParticipationsResponse to correct type ([`f40b117`](https://github.com/amz-tools/amazon-sp-api/commit/f40b117d489a0129b9e1dbe2ffaa552edf80e021))
- Added types for Sellers endpoint. ([`6eb6603`](https://github.com/amz-tools/amazon-sp-api/commit/6eb660306b8ed1f3a8cf86420521cb05c6bb85ec))
- feat: added an additional option to allow the usage of a custom proxy agent ([`3d69c12`](https://github.com/amz-tools/amazon-sp-api/commit/3d69c12938bdaceb55ed238e75d9954e2f12f31b))

**Merged pull requests:**

- Added types for Sellers endpoint. [\#263](https://github.com/amz-tools/amazon-sp-api/pull/263) ([curiousElf](https://github.com/curiousElf))
- Added an option to use a custom proxy agent [\#262](https://github.com/amz-tools/amazon-sp-api/pull/262) ([mehtaanirudh](https://github.com/mehtaanirudh))

## [v1.0.5](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.5) (2024-02-05)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.4...v1.0.5)

**Notable changes:**

- Added updateCredentials function to enable updating credentials after class instantiation

**Commits:**

- Added new function to updateCredentials after instantiation ([`452f693`](https://github.com/amz-tools/amazon-sp-api/commit/452f693c8ef017f1dfcfc33c083f3c4985c8f32c))

## [v1.0.4](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.4) (2024-01-11)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.3...v1.0.4)

**Notable changes:**

- Gracefully handle ECONNRESET errors

**Commits:**

- Gracefully handle ECONNRESET errors ([`19712f3`](https://github.com/amz-tools/amazon-sp-api/commit/19712f33cb6695d7de44e381389a58f77c193442))

## [v1.0.3](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.3) (2024-01-03)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.2...v1.0.3)

**Notable changes:**

- Added fix for reports already returned as json

**Commits:**

- Updated dev dependencies ([`ca3590a`](https://github.com/amz-tools/amazon-sp-api/commit/ca3590a764a046df14e440846134e7b82b6d10bc))
- Added fix for reports already returned as json ([`a37e228`](https://github.com/amz-tools/amazon-sp-api/commit/a37e22821cd5e83a6f0c4986e22239907e77372b))

## [v1.0.2](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.2) (2023-12-19)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.1...v1.0.2)

**Notable changes:**

- Added retry possibility for ENOTFOUND errors

**Commits:**

- Added ENOTFOUND handling as ETIMEDOUT is done and also resolve retry to finally fix issue of timeout errors from API ([`7481ece`](https://github.com/amz-tools/amazon-sp-api/commit/7481eceb39a777911c788d051fd43de9e4025996))

## [v1.0.1](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.1) (2023-12-14)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v1.0.0...v1.0.1)

**Notable changes:**

- Added retry logic when remote server request fails with ETIMEDOUT error
- Removed deprecated type ListCatalogItem
- Added getCompetitiveSummary operation to productPricing (2022-05-01) endpoint

**Commits:**

- Updated Readme ([`5c97d6b`](https://github.com/amz-tools/amazon-sp-api/commit/5c97d6b67f3855a8f97aa02b74554c9e5715c2a9))
- Added retry logic when remote server request fails with ETIMEDOUT error ([`a58dad6`](https://github.com/amz-tools/amazon-sp-api/commit/a58dad6b36f54fd5f17f73d92950e6bd5cca41ca))
- Removed unused interface ListCatalogItem (fix #243) ([`87cae8c`](https://github.com/amz-tools/amazon-sp-api/commit/87cae8cc8fd2ae77b5631b58d62476c79ac8a179))
- Added test for getCompetitiveSummary operation ([`a8f4848`](https://github.com/amz-tools/amazon-sp-api/commit/a8f48483a2e48bd6ba9d47191c855ea8aab21a6a))
- Added getCompetitiveSummary operation to productPricing endpoint ([`0e67e1b`](https://github.com/amz-tools/amazon-sp-api/commit/0e67e1bcc0af066a6231b9268f79aa4636f71d38))
- Fixed getOrderItemsResponse TS Exception - Fixes issue #252 ([`97c95ed`](https://github.com/amz-tools/amazon-sp-api/commit/97c95ed07ff8d90aa37830cab8f3810117e14d7c))
- Added support for xlsx reports (i.e. GET_REMOTE_FULFILLMENT_ELIGIBILITY report) ([`cf8dad4`](https://github.com/amz-tools/amazon-sp-api/commit/cf8dad44423772b7b23e9cb55713a79ec4fa14e9))
- Update SellingPartner.js ([`6b5f36d`](https://github.com/amz-tools/amazon-sp-api/commit/6b5f36d21651b0dffa268bda987f913bcabef8de))

**Merged pull requests:**

- 204 statusCode parsing bug [\#260](https://github.com/amz-tools/amazon-sp-api/pull/260) ([Roman991](https://github.com/Roman991))

## [v1.0.0](https://github.com/amz-tools/amazon-sp-api/tree/v1.0.0) (2023-10-29)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.8.5...v1.0.0)

**Notable changes:**

Removed deprecated roleCredentials logic and operations.js
Removed deprecated types: RoleCredentials, encryptionDetails for reports/feeds and AWS credentials
Removed Signer.js class as signing of requests is deprecated
Added new Request.js class and removed old request.js
Removed deprecated endpoints versions: reports and feeds (2020-09-04)
Fixes/Updates to order types

**Commits:**

- Update package.json ([`13ede1e`](https://github.com/amz-tools/amazon-sp-api/commit/13ede1e54216f59ab271489137ee498bcc4a7514))
- Minor changes to Readme ([`6e4142e`](https://github.com/amz-tools/amazon-sp-api/commit/6e4142ed96b712c800d3579a0e97578c12713c02))
- Updated notificationType enum ([`ff46ac3`](https://github.com/amz-tools/amazon-sp-api/commit/ff46ac34c1c266837f463e1e4e711e6d73c1f504))
- Updated dependencies in package.json ([`1c1f0cc`](https://github.com/amz-tools/amazon-sp-api/commit/1c1f0cc4b40de8695e308f08779bb1b7245e65a5))
- Updated Readme for 1.0.0 ([`58f00d8`](https://github.com/amz-tools/amazon-sp-api/commit/58f00d8432eac6722dba7898ac5150c70d07d034))
- Updated tests ([`63320e1`](https://github.com/amz-tools/amazon-sp-api/commit/63320e1643901ed108be4a955b12c7879eaf24b7))
- Removed role_credentials, encryptionDetails for reports/feeds and unneccessary credentials ([`9cf0a58`](https://github.com/amz-tools/amazon-sp-api/commit/9cf0a58df941441897a45ab1323dbf0daf449dd2))
- Removed unused operations.js ([`1e48882`](https://github.com/amz-tools/amazon-sp-api/commit/1e488828eea87b1d5392710cd7471155fbc8fcae))
- Removed role_credentials and operations import ([`5ce7f20`](https://github.com/amz-tools/amazon-sp-api/commit/5ce7f20b8723f651ccf3682b0f1d69a5e980ec83))
- Formatting updates for TimeoutManager and utils ([`33bcaf2`](https://github.com/amz-tools/amazon-sp-api/commit/33bcaf2f0014a90a835ce6126fe7d75c55bfcbee))
- Added new Request class ([`30441f5`](https://github.com/amz-tools/amazon-sp-api/commit/30441f55dcb1e64d616aa62f6e405032e57fbbac))
- Removed deprecated crendentials ([`b09cddd`](https://github.com/amz-tools/amazon-sp-api/commit/b09cdddd05444d2e247a061b76ae26687b86ff0e))
- Removed request.js and Signer.js ([`be15e6b`](https://github.com/amz-tools/amazon-sp-api/commit/be15e6b62738fa6e9f0f803d4d772dde770670bb))
- Removed deprecated reports and feeds version 2020-09-04 ([`ac5e5f1`](https://github.com/amz-tools/amazon-sp-api/commit/ac5e5f1276b16370d401966c187916faa679ce19))
- General fixing/updating of order typings ([`b642516`](https://github.com/amz-tools/amazon-sp-api/commit/b6425162ba04e75e7cf6482ecafc3b5abf49a7d0))
- fixes empty errors array handling in call api method ([`3903c05`](https://github.com/amz-tools/amazon-sp-api/commit/3903c05a64e4930b8813d6d10e6c605d27b402b9))

**Merged pull requests:**

- General fixing/updating of orders typings [\#246](https://github.com/amz-tools/amazon-sp-api/pull/246) ([amogower](https://github.com/amogower))
- Fixes empty errors array handling in call api method [\#245](https://github.com/amz-tools/amazon-sp-api/pull/245) ([Nifrigel](https://github.com/Nifrigel))

## [v0.8.5](https://github.com/amz-tools/amazon-sp-api/tree/v0.8.5) (2023-09-24)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.8.4...v0.8.5)

**Commits:**

- Updated reports endpoint tests to work with newest version of endpoint ([`89db07e`](https://github.com/amz-tools/amazon-sp-api/commit/89db07e0c16e0e121c133adb250f1b6fa9fec69f))
- Updated fulfillmentOutbound test for getFeatures operation ([`4fdb1d7`](https://github.com/amz-tools/amazon-sp-api/commit/4fdb1d70d908c727a1b754a0469bb0de775052fb))
- Removed tests fro deprecated fbaSmallAndLight endpoint ([`6d53e70`](https://github.com/amz-tools/amazon-sp-api/commit/6d53e707effa931f662ba1b0e17b7ce13c17110c))
- Changed updateFulfillmentOrder to use PUT instead of GET --> Bugfix #242 ([`44d2e58`](https://github.com/amz-tools/amazon-sp-api/commit/44d2e585880471bfb28ee32aecfff66062e77047))
- Added deprecation date to getEligibleShipmentServicesOld, cancelShipmentOld, and getAdditionalSellerInputsOld operations of merchantFulfillment endpoint ([`4101937`](https://github.com/amz-tools/amazon-sp-api/commit/410193736af8bac44dcc51945541b5746f72e75c))
- Added deprecation date for getInboundGuidance operation ([`b85a397`](https://github.com/amz-tools/amazon-sp-api/commit/b85a397eafba0743724be6cd6441c9340735fadb))
- Added deprecation date for authorization endpoint ([`61e6d7b`](https://github.com/amz-tools/amazon-sp-api/commit/61e6d7b4d0465a850cdb530f879359005170263e))
- Added deprecated warning to fbaSmallAndLight endpoint ([`68013f6`](https://github.com/amz-tools/amazon-sp-api/commit/68013f660df6c9971e92b6e3b0bbd2279c92fa1c))
- Added deprecation warning for feeds and reports endpoints version v2020-09-04 ([`83da196`](https://github.com/amz-tools/amazon-sp-api/commit/83da196f6d6cd8766b58d64ee7c593d494257922))
- option is called endpoints_versions instead of endpoint_versions ([`9c607de`](https://github.com/amz-tools/amazon-sp-api/commit/9c607de9f66cbb59a84ecf3647c550bc153bc23b))
- Update notifications_v1.js ([`74235de`](https://github.com/amz-tools/amazon-sp-api/commit/74235dea3a0d3d4e851ce0fdacde62fa628162af))
- Add support for createReport types ([`d7fc9b1`](https://github.com/amz-tools/amazon-sp-api/commit/d7fc9b13cf7bf9d123f7b10857175519cef10cda))
- Bugfix: Capitalize properties of Interface GetOrdersQuery ([`d7060e1`](https://github.com/amz-tools/amazon-sp-api/commit/d7060e1a3d28824a77ae7a4d68ac252846ee51b4))
- add missing params: endpoint, restricted_data_token to ReqParams interface ([`bec9e66`](https://github.com/amz-tools/amazon-sp-api/commit/bec9e6616f1800e9dd0f56b2379bb1645afdd4b3))
- added endpoint_versions option to client config ([`53a5d19`](https://github.com/amz-tools/amazon-sp-api/commit/53a5d196a1e7f207f6c085bbebf84da30ea0f19b))
- added the new ORDER_CHANGE notification type ([`4c26544`](https://github.com/amz-tools/amazon-sp-api/commit/4c26544f9af655637a7d12b5ad8f13fca9839e86))

**Merged pull requests:**

- Added missing PRICING_HEALTH notificationType [\#241](https://github.com/amz-tools/amazon-sp-api/pull/241) ([tho-masn](https://github.com/tho-masn))
- Add support for createReport types [\#238](https://github.com/amz-tools/amazon-sp-api/pull/238) ([livingforjesus](https://github.com/livingforjesus))
- Types added/fixed: Adds missing properties and [\#234](https://github.com/amz-tools/amazon-sp-api/pull/234) ([ctiospl](https://github.com/ctiospl))
- Added `endpoint_versions` option to client config [\#231](https://github.com/amz-tools/amazon-sp-api/pull/231) ([cohlar](https://github.com/cohlar))
- added the new ORDER_CHANGE notification type [\#227](https://github.com/amz-tools/amazon-sp-api/pull/227) ([dlamb22](https://github.com/dlamb22))

## [v0.8.4](https://github.com/amz-tools/amazon-sp-api/tree/v0.8.4) (2023-07-30)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.8.3...v0.8.4)

**Commits:**

- Updated to lowered restore_rate for getItemOffersBatch ([`18cd8cc`](https://github.com/amz-tools/amazon-sp-api/commit/18cd8cc703b1c200716562382a47094d81303d1a))
- Added new replenishment api endpoint ([`08abe89`](https://github.com/amz-tools/amazon-sp-api/commit/08abe891b0684a17b3ed9853e7ac54287824d765))
- Added sandbox-only submitFulfillmentOrderStatusUpdate operation for fulfillmentOutbound endpoint ([`77953e2`](https://github.com/amz-tools/amazon-sp-api/commit/77953e2d439c2e27c1c241e594e1b2263844aad7))
- Fixed downloadReport() function not considering the specified version for all steps ([`da2bd54`](https://github.com/amz-tools/amazon-sp-api/commit/da2bd54c9b37ba3a69b1784f0c8eb3340a849d7c))
- Added missing GetItemOffersPath import ([`41c2e73`](https://github.com/amz-tools/amazon-sp-api/commit/41c2e736e57291dd761f0b43f2cbdbe155e80f83))
- Implemented timeoutManager as external class ([`565ebe7`](https://github.com/amz-tools/amazon-sp-api/commit/565ebe79cffde112fff1d92aedd8d745b910de0c))
- Updated dependencies ([`67a9f38`](https://github.com/amz-tools/amazon-sp-api/commit/67a9f380ddb019dbfae08fc9fac14a8dd6d50169))
- Changed restore rate of confirmShipment to 2 per second ([`88ef612`](https://github.com/amz-tools/amazon-sp-api/commit/88ef612cc7233f4f1f4d1185f10936216a5ab25f))
- Removed hiring from Readme ([`7460a41`](https://github.com/amz-tools/amazon-sp-api/commit/7460a4168fc6d3a51f3f47f44797eb9ac304c493))
- Updated docs to new import structure ([`4a32949`](https://github.com/amz-tools/amazon-sp-api/commit/4a32949160b41b82412ddb96cc885730d995f491))
- Changed module exports to work with esm imports, commonjs and also legacy definition via commonjs with SellingPartnerAPI naming ([`b49240f`](https://github.com/amz-tools/amazon-sp-api/commit/b49240f55e3b3b8bc8e7378beb28a03dbe803f01))
- More correct response ([`726584c`](https://github.com/amz-tools/amazon-sp-api/commit/726584c9f23ccaaa398c6e2ec6365a57c3efd32a))
- getReports ([`50619bf`](https://github.com/amz-tools/amazon-sp-api/commit/50619bfe2fd832a117760edd55048149b0ee5aee))
- Add all report types ([`b40e019`](https://github.com/amz-tools/amazon-sp-api/commit/b40e019bff9d9c23c023ae2dabd92cfd6bf310d7))
- Update catalog item query ([`bee6acf`](https://github.com/amz-tools/amazon-sp-api/commit/bee6acf94f840a79f16490cc438a8040577141bd))
- Fixing capitalization in order payload ([`2db495c`](https://github.com/amz-tools/amazon-sp-api/commit/2db495c38102f928b58e187ac01270b20941d1e0))
- a timeoutManager object ([`3a8ebdc`](https://github.com/amz-tools/amazon-sp-api/commit/3a8ebdc28853db42e0474cd6936de4d22e3da3ba))
- Add operation order.confirmShipment ([`e9e15d3`](https://github.com/amz-tools/amazon-sp-api/commit/e9e15d3a853e42db2a188749fcc426772fb4f3ea))
- Export all types for fbaInventory and update getInventorySummariesResponse type to match ([`d9b3f47`](https://github.com/amz-tools/amazon-sp-api/commit/d9b3f47e05063fe627f432685b49c6ab292f90c6))
- add(type): `productPricing.getItemOffers` ([`fee8f03`](https://github.com/amz-tools/amazon-sp-api/commit/fee8f03b2b874adb89732b95bdd176d0d3135e4e))
- update(docs): add `esm` import ([`9bba19c`](https://github.com/amz-tools/amazon-sp-api/commit/9bba19c662d3c70e9cc9d0c1cc220d3e5680ca04))
- feat(named exports): for `SellingPartner` class ([`01cc30a`](https://github.com/amz-tools/amazon-sp-api/commit/01cc30a8eec239cea89dc7ead69563de5a4bed46))
- Fix ts `is not a constructor` ([`d98d41c`](https://github.com/amz-tools/amazon-sp-api/commit/d98d41cdceac808929c0c11561db437f77dd8a16))

**Merged pull requests:**

- Add more sp api typings [\#225](https://github.com/amz-tools/amazon-sp-api/pull/225) ([jakeleventhal](https://github.com/jakeleventhal))
- Fixing capitalization in order payload [\#219](https://github.com/amz-tools/amazon-sp-api/pull/219) ([jakeleventhal](https://github.com/jakeleventhal))
- a timeoutManager object [\#209](https://github.com/amz-tools/amazon-sp-api/pull/209) ([danielecr](https://github.com/danielecr))
- Add operation order.confirmShipment [\#198](https://github.com/amz-tools/amazon-sp-api/pull/198) ([yonahochieng](https://github.com/yonahochieng))
- Export all types for fbaInventory and update getInventorySummariesRes… [\#196](https://github.com/amz-tools/amazon-sp-api/pull/196) ([hwangm](https://github.com/hwangm))
- add\(type\): `productPricing.getItemOffers` [\#181](https://github.com/amz-tools/amazon-sp-api/pull/181) ([Roman991](https://github.com/Roman991))
- fix\(named-exports\): instead of `export default` [\#180](https://github.com/amz-tools/amazon-sp-api/pull/180) ([Roman991](https://github.com/Roman991))

## [v0.8.3](https://github.com/amz-tools/amazon-sp-api/tree/v0.8.3) (2023-03-14)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.8.2...v0.8.3)

**Commits:**

- Added new productPricing endpoint version v2022-05-01 ([`95c1129`](https://github.com/amz-tools/amazon-sp-api/commit/95c112995b513f15a9fa7669d0262df1c4a8aac7))
- Updated restore rates for orders v0, solicitations v1 and uploads v2020-11-01 ([`9fb8d34`](https://github.com/amz-tools/amazon-sp-api/commit/9fb8d344fb6c01320f2908b063f4fba0371670f9))

## [v0.8.2](https://github.com/amz-tools/amazon-sp-api/tree/v0.8.2) (2023-02-21)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.8.1...v0.8.2)

**Commits:**

- Updated Download Reports section in Readme ([`5621475`](https://github.com/amz-tools/amazon-sp-api/commit/5621475f1cff9d6c846a90a532a3514c11c22dba))
- Updated downloadReport methods to better fit in with the rest of the library ([`56dc033`](https://github.com/amz-tools/amazon-sp-api/commit/56dc033a749d9b78c706e3fcbb29a4b247ac3d56))
- update SellingPartner.js ([`6ff6439`](https://github.com/amz-tools/amazon-sp-api/commit/6ff6439e47e9d49fa8036304c2eb1aff1cd1fe2e))

**Merged pull requests:**

- update SellingPartner.js [\#192](https://github.com/amz-tools/amazon-sp-api/pull/192) ([cpietsch82](https://github.com/cpietsch82))

## [v0.8.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.8.1) (2023-01-28)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.8.0...v0.8.1)

**Commits:**

- Added new headers option to Readme ([`309c3ea`](https://github.com/amz-tools/amazon-sp-api/commit/309c3eae23665eb34b02f2049828ae5ec7cb3c2f))
- Added getOrderRegulatedInfo and updateVerificationsStatus orders endpoint operations ([`a4d6ffa`](https://github.com/amz-tools/amazon-sp-api/commit/a4d6ffa21b38d875b0395bb219e246fb1318fb6a))
- Added v2 shipping operations ([`ca62c19`](https://github.com/amz-tools/amazon-sp-api/commit/ca62c19f57076d357c4e7cb9fe925acf31ed7b13))

## [v0.8.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.8.0) (2022-10-23)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.10...v0.8.0)

**Commits:**

- Added timeouts to .download ([`ecbd0d1`](https://github.com/amz-tools/amazon-sp-api/commit/ecbd0d1c760dc314058ce84c492f018af34796e0))
- Updated vendorDirectFulfilmentShipping endpoint with new operations ([`de82cfb`](https://github.com/amz-tools/amazon-sp-api/commit/de82cfbe6887bb8586e9b9e71835adea7aedf960))
- Changed restore rates according to SP-API Throttling Adjustments ([`e7be23b`](https://github.com/amz-tools/amazon-sp-api/commit/e7be23b7b00ac0d49ba7cf22a26d46f81534b9b2))
- Removed deprecated operations listCatalogItems and getCatalogItem v0 ([`1bff27b`](https://github.com/amz-tools/amazon-sp-api/commit/1bff27b8d3771912847185738b668eb507eb50e7))
- Merge commit '5a2840f83a9ae878d1f4d01146664105e72c126e' ([`4e26ae7`](https://github.com/amz-tools/amazon-sp-api/commit/4e26ae738ba92b10d473fe106a57ae9c8111748d))
- Slight productPricing test spec change ([`76fa00b`](https://github.com/amz-tools/amazon-sp-api/commit/76fa00bcdfc800182fcecc2dcf344f91b4b4bca2))
- Revert "Changed productPricing test spec" ([`714ca72`](https://github.com/amz-tools/amazon-sp-api/commit/714ca722a4e55bb900ae448c1c3980714cd1c2ea))
- Changed productPricing test spec ([`c8402df`](https://github.com/amz-tools/amazon-sp-api/commit/c8402dfed8ad5eb01874af0312fff447469bf578))
- Added tests for timeouts ([`afa2822`](https://github.com/amz-tools/amazon-sp-api/commit/afa2822ddacc172139686e960d3bbe47299844df))
- Update Readme to include timeouts section ([`66e2d99`](https://github.com/amz-tools/amazon-sp-api/commit/66e2d993278d35fa304ec9081d9d1b6c410bd10e))
- Changed timeouts to be set globally as well as timeouts object, added idle timeout and restructured the code a bit ([`41bd13a`](https://github.com/amz-tools/amazon-sp-api/commit/41bd13a1b9cedf20ffb18ee72533b6e6d6e06a40))
- Add the new FBA_INVENTORY_AVAILABILITY_CHANGES notification ([`5a2840f`](https://github.com/amz-tools/amazon-sp-api/commit/5a2840f83a9ae878d1f4d01146664105e72c126e))
- Removed some artefacts ([`51a6158`](https://github.com/amz-tools/amazon-sp-api/commit/51a61587b75f13c4c4dbcc4d98562733df9f92fc))
- Added test for invalid security token ([`98ab500`](https://github.com/amz-tools/amazon-sp-api/commit/98ab50043146e935b3e2073839ae7ecebe973faf))
- Made x-amz-security-token and AWS_SELLING_PARTNER_ROLE optional ([`26ca0d7`](https://github.com/amz-tools/amazon-sp-api/commit/26ca0d758022dcf847d652222e5d46e8b221ebdc))
- typo String to string ([`44b182a`](https://github.com/amz-tools/amazon-sp-api/commit/44b182a72656ff129e57bb6ec444d8423ad970fd))
- Added response timeout and deadline timeout option support to allow request to be aborted if it takes a lot longer than expected due to network errors. ([`cf82599`](https://github.com/amz-tools/amazon-sp-api/commit/cf825990aebcb648ac81dbd6d15228d16dc52b29))

**Merged pull requests:**

- Add the new FBA_INVENTORY_AVAILABILITY_CHANGES notification [\#173](https://github.com/amz-tools/amazon-sp-api/pull/173) ([ctiospl](https://github.com/ctiospl))
- Added response timeout and deadline timeout option support [\#148](https://github.com/amz-tools/amazon-sp-api/pull/148) ([colin-brown](https://github.com/colin-brown))

## [v0.7.10](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.10) (2022-08-12)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.9...v0.7.10)

**Commits:**

- Updated dependencies ([`ad123ee`](https://github.com/amz-tools/amazon-sp-api/commit/ad123ee6dc668f072cf25f9987e874d6d2ae1040))
- Removed tests for soon to be deprecated operations ([`a4b5b17`](https://github.com/amz-tools/amazon-sp-api/commit/a4b5b174b8387135ec39e1aa425d65646a8ef03c))
- Added deprecation warning to soon to be deprecated catalogItems v0 operations ([`c4afa2a`](https://github.com/amz-tools/amazon-sp-api/commit/c4afa2ac11dd5fc05fe4eb703e0c471bae02edc6))
- Added the following operations to services endpoint: getRangeSlotCapacity, getFixedSlotCapacity, getAppointmentSlotsByJobId, getAppointmentSlots ([`89a554d`](https://github.com/amz-tools/amazon-sp-api/commit/89a554d41ec159800c6e72e02b59f138cec8e917))
- CreateReportResponse unwraps the payload object ([`f56fdae`](https://github.com/amz-tools/amazon-sp-api/commit/f56fdaeffd3c4ab45fcd058ef0bfddc7aa55b459))
- Fix TypeScript compilation ([`641a46f`](https://github.com/amz-tools/amazon-sp-api/commit/641a46f8235ae3bc5024ea3f155552dac44e1f3c))

**Merged pull requests:**

- Fix CreateReportResponse TypeScript Interface [\#158](https://github.com/amz-tools/amazon-sp-api/pull/158) ([Cellis9421](https://github.com/Cellis9421))
- Fix TypeScript compilation [\#141](https://github.com/amz-tools/amazon-sp-api/pull/141) ([ValentinMouret](https://github.com/ValentinMouret))

## [v0.7.9](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.9) (2022-07-10)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.8...v0.7.9)

**Commits:**

- Changed information on charset property for download function due to change proposed in issue #144 ([`26882ad`](https://github.com/amz-tools/amazon-sp-api/commit/26882ad7f2d9bc84f45979b4a62a18278c8b1881))
- Charset for decoding reports now taken from content-type header (as proposed in #144) ([`60c325d`](https://github.com/amz-tools/amazon-sp-api/commit/60c325dd59a3c78be7048ee2bdd31344bec14a66))
- Added additional tests for productPricing endpoint ([`509730f`](https://github.com/amz-tools/amazon-sp-api/commit/509730f1567352fe4e06021f7eebf9b9c04cb33e))
- Added known issue with commas as part of array value for query ([`bf18bc2`](https://github.com/amz-tools/amazon-sp-api/commit/bf18bc21b8f5186748e3fe695d32face9686331e))
- Implement new doubleEncodeURIComponent function that fixes issue #143 ([`f819419`](https://github.com/amz-tools/amazon-sp-api/commit/f81941902ea9ed34caf80076da208ef6871c86cf))

## [v0.7.8](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.8) (2022-07-01)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.7...v0.7.8)

**Commits:**

- Added new option of qs module called commaRoundTrip that should fix issues with incorrect formatting arrays of length 1 (#138) ([`fef719d`](https://github.com/amz-tools/amazon-sp-api/commit/fef719d1a1ddff5600af964463131ff06416be45))

## [v0.7.7](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.7) (2022-06-14)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.6...v0.7.7)

**Commits:**

- Updated fbaSmallAndLight test spec ([`0839db5`](https://github.com/amz-tools/amazon-sp-api/commit/0839db54b19c505e04242754f165faea4fded020))
- Updated double encode fix #134 ([`d38e8d7`](https://github.com/amz-tools/amazon-sp-api/commit/d38e8d7fcfde57393aa467bd3a786c6370b5fd41))
- Add encode query twice option ([`2890b44`](https://github.com/amz-tools/amazon-sp-api/commit/2890b44f41abf292dd9e794d47dc9ccdbe74147c))

**Merged pull requests:**

- Add encode query twice option fix \#134 [\#137](https://github.com/amz-tools/amazon-sp-api/pull/137) ([YuriiHerasymchuk](https://github.com/YuriiHerasymchuk))

## [v0.7.6](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.6) (2022-05-29)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.5...v0.7.6)

**Commits:**

- Changed new AWS_SESSION_TOKEN to be optional in Credentials.js ([`3673a7c`](https://github.com/amz-tools/amazon-sp-api/commit/3673a7ce92ffc6d8cf1b2224f231368bf1977061))
- Updated all external links in README ([`6c4e55d`](https://github.com/amz-tools/amazon-sp-api/commit/6c4e55d8e820aa6812abbffdd53aee4639ceba25))
- Minor README changes ([`b4eae4d`](https://github.com/amz-tools/amazon-sp-api/commit/b4eae4d6a39bae04cd4bb59961f0f7d6cb024096))
- Updated README to include AWS_SESSION_TOKEN where necessary ([`f77877b`](https://github.com/amz-tools/amazon-sp-api/commit/f77877bad505aa194d1ab30ba5a5b35592971ab1))
- include session token only if available ([`80f88c8`](https://github.com/amz-tools/amazon-sp-api/commit/80f88c83a0638914f2417a4417e1da6f8f8b4351))
- add AWS_SESSION_TOKEN to README ([`e1b2f03`](https://github.com/amz-tools/amazon-sp-api/commit/e1b2f03f3a2d890045d496bd8f94ad28db315a51))
- add AWS_SESSION_TOKEN and X-Amz-Security-Token header ([`0cd3f0d`](https://github.com/amz-tools/amazon-sp-api/commit/0cd3f0d497d0d0ed24c8268904162219686f4b80))

**Merged pull requests:**

- Fix assume role invalid client token [\#135](https://github.com/amz-tools/amazon-sp-api/pull/135) ([zirkelc](https://github.com/zirkelc))

## [v0.7.5](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.5) (2022-05-20)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.4...v0.7.5)

**Commits:**

- Added disclaimer to Readme ([`b5763c3`](https://github.com/amz-tools/amazon-sp-api/commit/b5763c373fb2d697b8c43b4501aead5cef089024))
- Added batch request tests for productPricing endpoint ([`54fd921`](https://github.com/amz-tools/amazon-sp-api/commit/54fd9216fa4cd1f8a8f3d64cd9d91fb968849341))
- Added new batch operations for productPricing endpoint ([`5af30c0`](https://github.com/amz-tools/amazon-sp-api/commit/5af30c02f7c87e54491252db04cc3d872d9cfe96))
- Minor change to productPricing endpoint tests ([`998d6c7`](https://github.com/amz-tools/amazon-sp-api/commit/998d6c776a4d4db62f336ded439ded996951bd11))
- Updated tests for productFees endpoint ([`d887e98`](https://github.com/amz-tools/amazon-sp-api/commit/d887e98c0865a263d25ab6d71f89a96f780f9504))
- Added new getMyFeesEstimates operation for productFees endpoint ([`120482e`](https://github.com/amz-tools/amazon-sp-api/commit/120482e60dab766d7cd2ab0f8ee2782047fe131f))
- Minor formatting changes for new catalogItems version ([`dc04b53`](https://github.com/amz-tools/amazon-sp-api/commit/dc04b53503c58b8ed1a65c774bf09336d34f961f))
- chore: replace hard code ([`7765e94`](https://github.com/amz-tools/amazon-sp-api/commit/7765e94cebda62f0b56d74487219d961e7299c19))
- Added catalogItems endpoint 2022-04-01 version test case ([`2dc5c7f`](https://github.com/amz-tools/amazon-sp-api/commit/2dc5c7f1c21e2ec2b3f88021802c01d0e2ff39b0))
- Added catalogItems endpoint 2022-04-01 version ([`80315d8`](https://github.com/amz-tools/amazon-sp-api/commit/80315d8ce9b51d5d6c2159ff4cee9f12c059f0f7))

**Merged pull requests:**

- Added catalogItems endpoint 2022-04-01 version [\#132](https://github.com/amz-tools/amazon-sp-api/pull/132) ([wangjue666](https://github.com/wangjue666))

## [v0.7.4](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.4) (2022-04-17)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.3...v0.7.4)

**Commits:**

- Updated dependencies ([`d5b50ad`](https://github.com/amz-tools/amazon-sp-api/commit/d5b50ad4e7b0a77e571601c96b847ac3a5ed948f))
- Change fbaInventory test spec to run for all regions ([`eb5c56b`](https://github.com/amz-tools/amazon-sp-api/commit/eb5c56b3d84261edea0fd2c41e19ec695de2fe45))
- Added test spec stub for new endpoints easyShip and vendorDirectFulfillmentSandboxTestData ([`624799f`](https://github.com/amz-tools/amazon-sp-api/commit/624799fa0a1052e13464b5190d337b25e7e008e7))
- Added SKU length issue to Known Issues section in README (Issue #126) ([`2c8a043`](https://github.com/amz-tools/amazon-sp-api/commit/2c8a043d3e0ad13d775800d3a497de84e97fbb07))
- Removed comment as FBAInventory in now globally available ([`ebbfe09`](https://github.com/amz-tools/amazon-sp-api/commit/ebbfe09326cf7adc15ecaf4cf6c9107acd5acc26))
- Added vendorDirectFulfillmentSandboxTestData endpoint ([`e33f539`](https://github.com/amz-tools/amazon-sp-api/commit/e33f5390cf209d8431848c8268346cd2fa4007b3))
- added vendorDirectFulfillmentTransactions endpoint 2021-12-28 version ([`1d6cc22`](https://github.com/amz-tools/amazon-sp-api/commit/1d6cc2265438c7abe1b8a5c531fc394690c2fce4))
- added vendorDirectFulfillmentShipping endpoint 2021-12-28 version ([`593c845`](https://github.com/amz-tools/amazon-sp-api/commit/593c845a74b0e4121e0417144538a20ac8629b74))
- Added vendorDirectFulfillmentOrders endpoint 2021-12-28 version ([`31ca604`](https://github.com/amz-tools/amazon-sp-api/commit/31ca604c508456f9b4b60a9befb52f2e432ea4b8))
- Added easyShip endpoint ([`fda781c`](https://github.com/amz-tools/amazon-sp-api/commit/fda781c0bd9dcfde5a7040101f14c2915f302b93))

## [v0.7.3](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.3) (2022-04-06)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.2...v0.7.3)

**Commits:**

- Minor changes for aplusContent and fbaSmallAndLight tests ([`42ef312`](https://github.com/amz-tools/amazon-sp-api/commit/42ef3124a122a6dd00a8dc34ffcbc1aa065076d4))
- Minor debug log output change ([`9fd3c11`](https://github.com/amz-tools/amazon-sp-api/commit/9fd3c112668d217c9d45aae9a5df1e480068ef40))
- Make amazon-sp-api compatible with bundler again ([`0db7943`](https://github.com/amz-tools/amazon-sp-api/commit/0db79434a1f13765facb667a48b631c66a0d1056))
- add OrderItemsList as payload type for GetOrderItemResponse ([`d898b8d`](https://github.com/amz-tools/amazon-sp-api/commit/d898b8dedacad86eefbdd9af26de45bfc9a0614d))

**Merged pull requests:**

- Make amazon-sp-api compatible with bundler again [\#123](https://github.com/amz-tools/amazon-sp-api/pull/123) ([juliensnz](https://github.com/juliensnz))
- fix payload type for GetOrderItemResponse [\#119](https://github.com/amz-tools/amazon-sp-api/pull/119) ([Goldbird-Solutions](https://github.com/Goldbird-Solutions))

## [v0.7.2](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.2) (2022-03-16)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.1...v0.7.2)

**Commits:**

- Added missing notificationType enum values (Fix #117) ([`e4b93fc`](https://github.com/amz-tools/amazon-sp-api/commit/e4b93fcb24cb8fe5b7e103ca31f35041f5c6b4a2))
- comment out unused order types ([`3ec0ac1`](https://github.com/amz-tools/amazon-sp-api/commit/3ec0ac1ecaca6833dfc268e51e9bea1b52935cb7))

**Merged pull requests:**

- comment out unused order types [\#115](https://github.com/amz-tools/amazon-sp-api/pull/115) ([Goldbird-Solutions](https://github.com/Goldbird-Solutions))

## [v0.7.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.1) (2022-02-24)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.7.0...v0.7.1)

**Commits:**

- Added some more debug logs ([`604ce8f`](https://github.com/amz-tools/amazon-sp-api/commit/604ce8f8f5f5aa450f9559ffad12345a3dec9ce0))
- Added restore_rate support for floating numbers as well as support in combination if usage of api_path ([`7e7be29`](https://github.com/amz-tools/amazon-sp-api/commit/7e7be291c17fbc3190c687f801d3692964bd58b8))
- Changed restore_rate type to Number ([`aa3f90c`](https://github.com/amz-tools/amazon-sp-api/commit/aa3f90cc7981f60ae89397ee2b1b25163ac37952))
- use isSafeInteger instead of isFinite ([`6cf056d`](https://github.com/amz-tools/amazon-sp-api/commit/6cf056d24313d6bf21cedb24efa0cf02e06859de))
- add restore_rate param to callAPI options ([`c771ce6`](https://github.com/amz-tools/amazon-sp-api/commit/c771ce69efd1570c7d1cdc3dd6e06b257e5ccb1a))

**Merged pull requests:**

- add restore_rate param to callAPI options [\#111](https://github.com/amz-tools/amazon-sp-api/pull/111) ([vhle-ms](https://github.com/vhle-ms))

## [v0.7.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.7.0) (2022-02-18)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.6...v0.7.0)

**Commits:**

- Updated dependencies ([`c0ce774`](https://github.com/amz-tools/amazon-sp-api/commit/c0ce7740d9e4f96cb0e23b692cc5f3de7e4f60cd))
- Added note to Readme that manual encoding might be necessary before using api_path ([`29b8d34`](https://github.com/amz-tools/amazon-sp-api/commit/29b8d34c264dab80da04257f88e13ba37bc319f9))
- Added tests for SKUs with special chars (#+ =,?~\_-|/!\*?()) ([`57ea00b`](https://github.com/amz-tools/amazon-sp-api/commit/57ea00b519966a39d0f59b5173626b1446e741e1))
- Fixed bug with querystring discussed in #103 ([`b530017`](https://github.com/amz-tools/amazon-sp-api/commit/b5300173d49372dfbcaf4905b4f43062c9da086d))
- Changed api_path parts encoding to be done when constructing the api_path in order to be able to make it work with path params including a '/' (i.e. as part of SKUs) ([`f3352c5`](https://github.com/amz-tools/amazon-sp-api/commit/f3352c5583023df753a9473ea333e819f5318070))
- Export all finances interfaces (Typescript support) ([`708c834`](https://github.com/amz-tools/amazon-sp-api/commit/708c834ad99c2e0003bbb06d6ffed1178916afdd))
- Moved throttling debug log ([`87c46ed`](https://github.com/amz-tools/amazon-sp-api/commit/87c46ed1f5b88e89318a0b8f8bcc7ae5a9ae06a2))
- Changed console_warn_on_request_retry to debug_log to have a more common naming to include other logs ([`ed02480`](https://github.com/amz-tools/amazon-sp-api/commit/ed02480a9be18d7b615f08717ca35d7d8228bef8))
- add single encoding for req_params.api_path, and double encoding for canonical request ([`5497799`](https://github.com/amz-tools/amazon-sp-api/commit/5497799dc799149edc92f8cfabd6b504106bf33a))
- double encoding fix for AWS Signature v4 ([`d9b1e5f`](https://github.com/amz-tools/amazon-sp-api/commit/d9b1e5fcd4a05fef6c87222f413e743bcd038b3a))
- Minor changes to description of console_warn_on_request_retry ([`15f06ef`](https://github.com/amz-tools/amazon-sp-api/commit/15f06ef03da30f7e8a9a5620afda25c1f99f090c))
- Add 'console_warn_on_request_retry' param ([`6451ed2`](https://github.com/amz-tools/amazon-sp-api/commit/6451ed23a775bd305e18c1d0fc0139fa1ada0357))

**Merged pull requests:**

- Export all finances interfaces \(Typescript support\) [\#108](https://github.com/amz-tools/amazon-sp-api/pull/108) ([omrishaked](https://github.com/omrishaked))
- double encoding fix for AWS Signature v4 [\#103](https://github.com/amz-tools/amazon-sp-api/pull/103) ([vhle-ms](https://github.com/vhle-ms))
- Adding an option for console warnings on throttle retries [\#95](https://github.com/amz-tools/amazon-sp-api/pull/95) ([YuriiHerasymchuk](https://github.com/YuriiHerasymchuk))

## [v0.6.6](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.6) (2022-01-23)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.5...v0.6.6)

**Commits:**

- Updated dependencies ([`f9584ae`](https://github.com/amz-tools/amazon-sp-api/commit/f9584aea47448a0e233345a2a0b0a0547215f5e9))
- Encode chars !'()\* once when part of query (Fully Fixed Issue #77) ([`ce413f6`](https://github.com/amz-tools/amazon-sp-api/commit/ce413f61d236d279b059608d1c46998250065709))
- Minor changes to sandbox documentation in Readme ([`58aa762`](https://github.com/amz-tools/amazon-sp-api/commit/58aa76258788762f3305a8f784c1fbd1222809bd))
- Updated getEligibleShippingServices restore rate ([`10d5573`](https://github.com/amz-tools/amazon-sp-api/commit/10d55737940cca62538dfd0530dfea86278e5c0d))
- Changed user_agent documentation in Readme ([`bdfe4f0`](https://github.com/amz-tools/amazon-sp-api/commit/bdfe4f03a65ddc111413a4593e903ed171a376be))
- Added user agent to signed headers ([`bf78ad2`](https://github.com/amz-tools/amazon-sp-api/commit/bf78ad27b8ddc9406035525162f0fb887dad1fa4))
- Added default user agent in accordance with docs ([`707c4c8`](https://github.com/amz-tools/amazon-sp-api/commit/707c4c84a8e136479fe5ab86f91909d27212eae9))
- Specifying custom user-agent headers for api calls ([`f27058c`](https://github.com/amz-tools/amazon-sp-api/commit/f27058c5cc608786d9a4e331a78a1e5ab247eb37))
- add missing imports in index.d.ts ([`fef64c3`](https://github.com/amz-tools/amazon-sp-api/commit/fef64c37d4dc6b80f8c9fae2d2b5a2b89f375ee2))
- add getLabels, getBillOfLading, getShipments, getShipmentItemsByShipmentId and getShipmentItems ([`b64a375`](https://github.com/amz-tools/amazon-sp-api/commit/b64a375090c1d4feec11f569132db33b9df32e1a))
- add createRestrictedDataToken ([`dd6d26b`](https://github.com/amz-tools/amazon-sp-api/commit/dd6d26b8484ebcadd71a376b2b5570af7690e361))
- added use_sandbox property to Options Type in : baseTypes.ts ([`fc5a29f`](https://github.com/amz-tools/amazon-sp-api/commit/fc5a29f698e255885befcb7202473174c0c02dc0))
- options definition added to callApi() method ([`b7de3f1`](https://github.com/amz-tools/amazon-sp-api/commit/b7de3f1b4713a7c0de61706c22359cc48eb1f490))

**Merged pull requests:**

- Specifying custom user-agent headers for api calls [\#93](https://github.com/amz-tools/amazon-sp-api/pull/93) ([erayalakese](https://github.com/erayalakese))
- add fulfillment inbound operations [\#87](https://github.com/amz-tools/amazon-sp-api/pull/87) ([mgecmez](https://github.com/mgecmez))
- add createRestrictedDataToken [\#86](https://github.com/amz-tools/amazon-sp-api/pull/86) ([mgecmez](https://github.com/mgecmez))
- added use_sandbox property to Options Type in : baseTypes.ts [\#83](https://github.com/amz-tools/amazon-sp-api/pull/83) ([harelbaruchi](https://github.com/harelbaruchi))
- options definition added to callApi\(\) method [\#81](https://github.com/amz-tools/amazon-sp-api/pull/81) ([erayalakese](https://github.com/erayalakese))

## [v0.6.5](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.5) (2021-12-17)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.4...v0.6.5)

**Commits:**

- Added new updateShipmentStatus operation ([`6d25fbd`](https://github.com/amz-tools/amazon-sp-api/commit/6d25fbd8ffa90c953631905e1865f9dcc0b80f13))
- Minor fix wrong link ([`2473ad6`](https://github.com/amz-tools/amazon-sp-api/commit/2473ad6ce7cae4d598b0ef4aaf509d719c47124d))
- add transport operations for fulfillment inbound ([`6bb502a`](https://github.com/amz-tools/amazon-sp-api/commit/6bb502a11ff25234100f10049b3eb7571f7d9598))

**Merged pull requests:**

- Add transport operations for fulfillment inbound [\#79](https://github.com/amz-tools/amazon-sp-api/pull/79) ([mgecmez](https://github.com/mgecmez))

## [v0.6.4](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.4) (2021-12-07)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.3...v0.6.4)

**Commits:**

- Encode chars !'()\* once when part of api path (Fixed Issue #77) ([`bca9a59`](https://github.com/amz-tools/amazon-sp-api/commit/bca9a591594da1724f3604fe0787f8d0681b4a96))
- added upload typings for feeds ([`0dd97cb`](https://github.com/amz-tools/amazon-sp-api/commit/0dd97cb08ba74139291dbb542df9929263e9453f))
- Updated test spec for catalogItems to make sure searchCatalogItems works with whitespace in keywords ([`a3abd78`](https://github.com/amz-tools/amazon-sp-api/commit/a3abd788beae3e5c27ef85a84e9c464c4198ca65))

**Merged pull requests:**

- added upload typings for feeds [\#73](https://github.com/amz-tools/amazon-sp-api/pull/73) ([jesusvalle](https://github.com/jesusvalle))

## [v0.6.3](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.3) (2021-11-21)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.2...v0.6.3)

**Commits:**

- Bugfix Issue #70 ([`c8c2649`](https://github.com/amz-tools/amazon-sp-api/commit/c8c26498c8f13d10bae9403ed3d88c4d59ae4e74))

## [v0.6.2](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.2) (2021-11-18)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.1...v0.6.2)

**Commits:**

- Bugfix for endpoints export missing first endpoint aplusContent ([`4fbb145`](https://github.com/amz-tools/amazon-sp-api/commit/4fbb145edfd2ff9bc6d8a837bd262abbd1632ebe))

## [v0.6.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.1) (2021-11-14)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.6.0...v0.6.1)

**Commits:**

- Renamed productTypeDefinitions endpoint ([`90d1ea8`](https://github.com/amz-tools/amazon-sp-api/commit/90d1ea8cb8c2a36177c19f45b019528c26025582))
- Updated dependencies ([`fd9eae7`](https://github.com/amz-tools/amazon-sp-api/commit/fd9eae754d807dc4ac00b957ee0e5b89d03b0693))

## [v0.6.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.6.0) (2021-11-06)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.6...v0.6.0)

**Commits:**

- Fixed issues with UTF-8 chars and whitespace when part of the querystring (Fixed #63) ([`6b7bf23`](https://github.com/amz-tools/amazon-sp-api/commit/6b7bf232d840bec3dcd306fbd5f287c7188cf849))
- Added test for listingsRestrictions ([`d0cb157`](https://github.com/amz-tools/amazon-sp-api/commit/d0cb157598b0006458dabe144fc83b0d5617ab03))
- Added new listingsRestrictions endpoint ([`e5cd83e`](https://github.com/amz-tools/amazon-sp-api/commit/e5cd83ea4284342fbcbcda765db99d576a0b9376))
- Changed endpoints require statements to be more dynamic ([`0bb9c6a`](https://github.com/amz-tools/amazon-sp-api/commit/0bb9c6aed3957c6fd4f0ae3502c8462f13fa6e13))
- Minor Readme changes ([`d810dc8`](https://github.com/amz-tools/amazon-sp-api/commit/d810dc819280233e9f90477a48535ec9f0749323))
- Update restore_rates in catalogItems and fbaInventory ([`9ff52e6`](https://github.com/amz-tools/amazon-sp-api/commit/9ff52e64338cce350e17615146a577bf8971fced))
- Fixed bug with UTF-8 and/or spaces in SKUs when part of the api_path (i.e. getMyFeesExstimateForSKU, see issue amzn/selling-partner-api-docs#742) ([`8558e6c`](https://github.com/amz-tools/amazon-sp-api/commit/8558e6ce7cf16362e7e318ef12609459b9bab4ab))
- Change homepage in package.json ([`fa3eeab`](https://github.com/amz-tools/amazon-sp-api/commit/fa3eeabe664bf6ab7d757c44792203e6a50aab09))
- listingsItems 2021-08-01 ([`ac9f2c4`](https://github.com/amz-tools/amazon-sp-api/commit/ac9f2c4df6a710c7a408d9106bcca6e76ed2af6f))

**Merged pull requests:**

- listingsItems 2021-08-01 [\#64](https://github.com/amz-tools/amazon-sp-api/pull/64) ([altruer-old](https://github.com/altruer-old))

## [v0.5.6](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.6) (2021-10-23)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.5...v0.5.6)

**Commits:**

- Updated dependencies ([`12d664d`](https://github.com/amz-tools/amazon-sp-api/commit/12d664dcd921ea7f9b694d7c0796649c26fa5435))
- Changed tokens test spec ([`74c72d8`](https://github.com/amz-tools/amazon-sp-api/commit/74c72d836e8badb3c47580f493f14e2758ebc70f))
- Changed TS "Body" interface names to be named according to naming convention in README ([`ef9ed81`](https://github.com/amz-tools/amazon-sp-api/commit/ef9ed812b91145d9c29a0f3d1ed06991e0b6adb0))
- Changed a couple inconsistent body definitions ([`f843be4`](https://github.com/amz-tools/amazon-sp-api/commit/f843be4fc077e4b69696d2735cb1461da1c977da))
- Added support for exchange authorisation code from a seller to a refresh token ([`934407d`](https://github.com/amz-tools/amazon-sp-api/commit/934407d3e7eb7092c2ddbccd1b30d5717896debd))
- Changes in typescript information: - Added support for specifying credentials in the constructor - Fixed naming of the order file - should be orders - Fixed specification for the reports which had a "body" level too much - Added getter for access_token and role_credentials ([`f2729ce`](https://github.com/amz-tools/amazon-sp-api/commit/f2729cef6df4d92974ce55a40dbfdcd4f11f7eec))

**Merged pull requests:**

- Changes in typescript information: [\#60](https://github.com/amz-tools/amazon-sp-api/pull/60) ([jebirch](https://github.com/jebirch))

## [v0.5.5](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.5) (2021-09-19)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.4...v0.5.5)

**Commits:**

- Fixed createFeed bug in new feed version 2021-06-30 (Issue #53) ([`70c38f4`](https://github.com/amz-tools/amazon-sp-api/commit/70c38f49c1708bde75c641937a7b868dcb4361f2))

## [v0.5.4](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.4) (2021-07-29)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.3...v0.5.4)

**Commits:**

- Version 2021-06-30 of SP-API renders document encryption optional in feeds and reports ([`1b51f54`](https://github.com/amz-tools/amazon-sp-api/commit/1b51f5435c5e858be2ca040bf76f118fd1620943))

**Merged pull requests:**

- Version 2021-06-30 of SP-API renders document encryption optional in … [\#45](https://github.com/amz-tools/amazon-sp-api/pull/45) ([brianmhofmeister](https://github.com/brianmhofmeister))

## [v0.5.3](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.3) (2021-07-27)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.2...v0.5.3)

**Commits:**

- Changed credentials to class structure ([`b069bdd`](https://github.com/amz-tools/amazon-sp-api/commit/b069bdd80b4c9b767ba6f3335e1aa77174e8cae0))
- Removed aplus endpoint issues from Known Issues section ([`4707f08`](https://github.com/amz-tools/amazon-sp-api/commit/4707f0875f40fe32b25b484c30a48b1810848516))
- Readded aplus tests ([`2138bd0`](https://github.com/amz-tools/amazon-sp-api/commit/2138bd0ef1f3ce756df05f81662af235220329a3))
- Add reference to TS types in package.json ([`f2c8e24`](https://github.com/amz-tools/amazon-sp-api/commit/f2c8e24ac0f0c7355a0b5ad8b3811e3fb072234a))
- add:orderAPI types ([`1fd9126`](https://github.com/amz-tools/amazon-sp-api/commit/1fd9126d832c93aadd0912912a21707aad1d8f40))
- fix typo in readme ([`3ed6083`](https://github.com/amz-tools/amazon-sp-api/commit/3ed6083866600c65f40530ae83102bd07a33a105))

**Merged pull requests:**

- Add reference to TS types in package.json [\#41](https://github.com/amz-tools/amazon-sp-api/pull/41) ([igrybkov](https://github.com/igrybkov))
- add:orderAPI types [\#39](https://github.com/amz-tools/amazon-sp-api/pull/39) ([AtsushiK1997](https://github.com/AtsushiK1997))
- Fix Typo in Readme [\#37](https://github.com/amz-tools/amazon-sp-api/pull/37) ([Taimoor0217](https://github.com/Taimoor0217))

## [v0.5.2](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.2) (2021-06-07)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.1...v0.5.2)

**Commits:**

- Update Known Issues section in Readme ([`34223fe`](https://github.com/amz-tools/amazon-sp-api/commit/34223fe6e658f6ef5d4a7e5d6a297d3159471940))
- Added new tests for new operation searchCatalogItems and new endpoints listingsItems, productTypesDefinitions, shipmentInvoicing ([`2bcf8d7`](https://github.com/amz-tools/amazon-sp-api/commit/2bcf8d72a50d7367b12f39a42638370e1f5d4757))
- Added new shipmentInvoicing endpoint ([`7480467`](https://github.com/amz-tools/amazon-sp-api/commit/748046784277a6d8bc27cf31116ef0daf4198556))
- Added productTypesDefinitions endpoint ([`b770829`](https://github.com/amz-tools/amazon-sp-api/commit/b77082918254fcd064d6a31c470ab8794688dd84))
- Added new listingsItems endpoint and HTTP PATCH support ([`6755c1c`](https://github.com/amz-tools/amazon-sp-api/commit/6755c1c60bbd32887de61de179cde7bd6f576312))
- Added new searchCatalogItems operation ([`7927e33`](https://github.com/amz-tools/amazon-sp-api/commit/7927e3308441c87b82a1d9c65ad542bc7c03ea45))
- Updated restore rates for orders, productFees and productPricing ([`e579891`](https://github.com/amz-tools/amazon-sp-api/commit/e57989142d6a589e5a7637acc231a7564b28641d))

## [v0.5.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.1) (2021-05-12)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.5.0...v0.5.1)

**Commits:**

- Added new vendor endpoints and operations ([`f4ecf33`](https://github.com/amz-tools/amazon-sp-api/commit/f4ecf33958ac0c5d2f98f39dccddd9c293b6b798))
- Added new services operations ([`8a2757d`](https://github.com/amz-tools/amazon-sp-api/commit/8a2757d90011805acc7841e54196cb88d2b8864f))
- Added possibility of operations without default restore rate ([`54d1d08`](https://github.com/amz-tools/amazon-sp-api/commit/54d1d08803026342ce29269df3bbc3748b79ba63))
- Updated dependencies ([`93b25e0`](https://github.com/amz-tools/amazon-sp-api/commit/93b25e0fb12ef861b6fbba4c232c4d64f12d9ad2))

## [v0.5.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.5.0) (2021-05-07)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.4.0...v0.5.0)

**Commits:**

- Updated and added tests with new endpoint parameter ([`cb3d086`](https://github.com/amz-tools/amazon-sp-api/commit/cb3d086f69def71dc50cfc5a5e0bc6e06058f443))
- Added documentation for LWA authorization code exchange function ([`141e575`](https://github.com/amz-tools/amazon-sp-api/commit/141e575990788a1c3c75bc9f7430deb68970350f))
- Updated readme to include new endpoint logic ([`df2f7f0`](https://github.com/amz-tools/amazon-sp-api/commit/df2f7f0798e70ffa483bb16e517b42b7be2ee4ec))
- Added new endpoint parameter to .callAPI() ([`c69664c`](https://github.com/amz-tools/amazon-sp-api/commit/c69664c9949b00c9b2d48458d7fc90fcec3d67ff))
- Added console.warn logic to utils ([`9d0abda`](https://github.com/amz-tools/amazon-sp-api/commit/9d0abdace728505640bd53077cc0f47d146f128c))
- Updated outdated links ([`99762d8`](https://github.com/amz-tools/amazon-sp-api/commit/99762d88bd6410b9bacb335ebe281f44085d51fb))
- Added exchange() func to exchange LWA auth_code for a LWA refresh_token ([`ece51f9`](https://github.com/amz-tools/amazon-sp-api/commit/ece51f9245298d1cdfcdc01588b57ed2033a1b88))

## [v0.4.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.4.0) (2021-04-11)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.7...v0.4.0)

**Commits:**

- Added new tests ([`c6aa763`](https://github.com/amz-tools/amazon-sp-api/commit/c6aa763ddfc63e05b8f873f321ca39820e6ac574))
- Added new api_path property ([`5e29130`](https://github.com/amz-tools/amazon-sp-api/commit/5e29130e109b9f0060a4c3f7c3c4eb811eecb263))
- Updated comments ([`432e285`](https://github.com/amz-tools/amazon-sp-api/commit/432e2858dc2993aadc6e555b7a76c4877ac341d3))
- Typofixes ([`a684507`](https://github.com/amz-tools/amazon-sp-api/commit/a684507a7ed9f51933eba8abdea5fc4300af0b11))
- Readme restructured and updated ([`4f19ea3`](https://github.com/amz-tools/amazon-sp-api/commit/4f19ea33c7e7b0b5203bdf64c72c26c628a3cce9))
- Added support for restricted data tokens endpoint ([`0df6f5e`](https://github.com/amz-tools/amazon-sp-api/commit/0df6f5ef1b67f374a5dfe7def4b4c6c2654e176b))
- Extended new version logic: Added endpoints_versions and version_fallback config options ([`641f84a`](https://github.com/amz-tools/amazon-sp-api/commit/641f84ad6217ca1e999c1c1b689fc49650357965))
- Changed to correct endpoint name ([`cb941d8`](https://github.com/amz-tools/amazon-sp-api/commit/cb941d8bb59d3324b324c30f7292bdc9c2f10b37))
- Added endpoints getter ([`9305204`](https://github.com/amz-tools/amazon-sp-api/commit/9305204ed791146538ff8f9fa613e59e09a9bd6e))
- Added support for multiple operation versions to Sellingpartner class ([`9f2c0ea`](https://github.com/amz-tools/amazon-sp-api/commit/9f2c0ea1addc0a84b5d4c3e7639132b9325f6c1b))
- Changed resources to new structure to enable support for multiple versions of endpoints and operations ([`9502247`](https://github.com/amz-tools/amazon-sp-api/commit/950224780d665756b13bd6064393180e31097446))
- Small typos fixed in readme ([`3bf20f0`](https://github.com/amz-tools/amazon-sp-api/commit/3bf20f05a66b920c7c3b8164aff0d7ab13599187))
- Small typos fixed in readme ([`c9a2517`](https://github.com/amz-tools/amazon-sp-api/commit/c9a2517945b52c97abe5ba3f88c21e9ae5f8364d))
- Small typos fixed in readme ([`d4ab134`](https://github.com/amz-tools/amazon-sp-api/commit/d4ab1346549ad1a1cd194f396ad78e7e5bb32c76))
- Small typos fixed in readme ([`1ea51f1`](https://github.com/amz-tools/amazon-sp-api/commit/1ea51f11608cab026cb549e9ac853ca0c869103b))

## [v0.3.7](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.7) (2021-04-03)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.6...v0.3.7)

**Commits:**

- Updated comments for .callAPI() ([`c1afa56`](https://github.com/amz-tools/amazon-sp-api/commit/c1afa568f527c553525db193b6fab791a416db35))
- Added restore rates information in readme ([`1c127b5`](https://github.com/amz-tools/amazon-sp-api/commit/1c127b542f248ad9201c0ee350e53f51f6703109))
- If given use x-amzn-ratelimit-limit from result header as restore_rate in case of throttling ([`2a127a2`](https://github.com/amz-tools/amazon-sp-api/commit/2a127a29fc27e4a0c1934d0f62f90c0a80d70fee))
- Updated restore_rate for catalogItems endpoints ([`7b36742`](https://github.com/amz-tools/amazon-sp-api/commit/7b367424a2387b179ca5889a743db1ba504b302c))

## [v0.3.6](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.6) (2021-03-31)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.5...v0.3.6)

**Commits:**

- Added new raw_result option for .callAPI to readme ([`746c188`](https://github.com/amz-tools/amazon-sp-api/commit/746c18887e94c75d7379f50bb61a4d3eba45e69a))
- Added new option to .callAPI to return raw result ([`86dcf9d`](https://github.com/amz-tools/amazon-sp-api/commit/86dcf9dcffe41e5fde2bef6fd141a7460534bb00))
- Reformatted pagination fix and added comment to API call in resources/fbaInventory.js ([`92b17b9`](https://github.com/amz-tools/amazon-sp-api/commit/92b17b96f514fb348d3e72d3d4e68cd1b80ebc85))
- Updated incomplete documentation on grantless operations ([`daefdbc`](https://github.com/amz-tools/amazon-sp-api/commit/daefdbc761003c63258d932bdbd655f4401a387f))
- Added seller support information ([`b84d4a4`](https://github.com/amz-tools/amazon-sp-api/commit/b84d4a49aa60b48a1096e88f180e69136d7d2585))
- Fixed pagination of getInventorySummaries ([`931cb69`](https://github.com/amz-tools/amazon-sp-api/commit/931cb6927803c66435fb1580bba6842df40c5d38))

**Merged pull requests:**

- Fixed pagination of getInventorySummaries [\#26](https://github.com/amz-tools/amazon-sp-api/pull/26) ([fmalekpour](https://github.com/fmalekpour))

## [v0.3.5](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.5) (2021-02-17)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.4...v0.3.5)

**Commits:**

- Updated .download section in readme ([`4ff3b7e`](https://github.com/amz-tools/amazon-sp-api/commit/4ff3b7e0b225adcdbad07b01b9704c0dcf0ce610))
- Added decoding charset option to report download ([`aef1435`](https://github.com/amz-tools/amazon-sp-api/commit/aef14350a3b4756be11ea5f5034f76f6a347d0a6))
- RateLimit Header TODO added ([`2da54f3`](https://github.com/amz-tools/amazon-sp-api/commit/2da54f34073728f4c2cf59d4407f9db961f9938e))
- Added tests for aplus content operations ([`19393a2`](https://github.com/amz-tools/amazon-sp-api/commit/19393a2f89d80b4205bc5e4232d9b4024683500b))
- Added new aplus content operations ([`38021ef`](https://github.com/amz-tools/amazon-sp-api/commit/38021efbd7f2327497f844d868f7c782f53eaf19))

## [v0.3.4](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.4) (2021-01-28)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.3...v0.3.4)

**Commits:**

- Added table of contents ([`896a005`](https://github.com/amz-tools/amazon-sp-api/commit/896a0056e61c0a988010fa6432d35075cdbf1ccf))
- turn off quote detection in report csv to json conversion ([`0780ae2`](https://github.com/amz-tools/amazon-sp-api/commit/0780ae235f5e77da5ec0df3f501e97d5fd23cad6))

**Merged pull requests:**

- Turn off quote detection in report csv to json conversion [\#22](https://github.com/amz-tools/amazon-sp-api/pull/22) ([mihai9-lab](https://github.com/mihai9-lab))

## [v0.3.3](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.3) (2021-01-16)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.2...v0.3.3)

**Commits:**

- Added tests for config errors ([`992a1d0`](https://github.com/amz-tools/amazon-sp-api/commit/992a1d0439bb96dc3fa488c82193a86fd00a42ec))
- Fixed issue with operation allowance for non grantless operations ([`9a4b61d`](https://github.com/amz-tools/amazon-sp-api/commit/9a4b61de4c8b63b5cff8d5fde5166731a27eca3f))
- Added missing scope for grantless operation error message ([`f4a1a9a`](https://github.com/amz-tools/amazon-sp-api/commit/f4a1a9a865bc7c6180428120681a98ad7230d2ee))
- Added documentation for grantless operations ([`1bb0094`](https://github.com/amz-tools/amazon-sp-api/commit/1bb0094657d3636deb152cda0bc98b2b7dfdabd7))
- Added tests for grantless operations ([`45cac94`](https://github.com/amz-tools/amazon-sp-api/commit/45cac94c7b7f34b6ccdfac9ec5774a046321893c))
- Added "only_grantless_operations" option ([`8fd39a6`](https://github.com/amz-tools/amazon-sp-api/commit/8fd39a6550e7659b994ea913caf206aec6e2778a))
- Moved operation validation out of callAPI to new function ([`a1b0153`](https://github.com/amz-tools/amazon-sp-api/commit/a1b0153d58bde65e110cc53ea7e5bffc27351fb3))
- Restructured access_token and role_credentials validation in new function ([`4346122`](https://github.com/amz-tools/amazon-sp-api/commit/434612232e0eb1468b5a286837c36717f879ad2f))
- Added scope to refreshAccessToken call when token expired ([`3d5a4a3`](https://github.com/amz-tools/amazon-sp-api/commit/3d5a4a3764d32368f2f721105803a587a99080ee))
- Added grantless token logic to .callAPI ([`56918e0`](https://github.com/amz-tools/amazon-sp-api/commit/56918e0ea4c2e8bc2020de36d7610cd7f5aae390))
- Added scope for grantless operations ([`7b520cb`](https://github.com/amz-tools/amazon-sp-api/commit/7b520cb98cf544c6d9775cf0d06b6533831db897))
- Added grantless_tokens class var to hold valid tokens for a grantless operation scope ([`dc6e68b`](https://github.com/amz-tools/amazon-sp-api/commit/dc6e68baffc12cb3a8e25c19ced84479f27a80fa))
- Added scope parameter for grantless operation to refreshAccessToken ([`9581647`](https://github.com/amz-tools/amazon-sp-api/commit/9581647a367db347d47a9e4a7b8f0d7c14586f31))
- Updated sandbox comment in SellingPartner to be in line with Readme ([`b40d0bf`](https://github.com/amz-tools/amazon-sp-api/commit/b40d0bf39abd6c5702474624a0ed6173dcc9e630))
- Update README.md ([`fda7d86`](https://github.com/amz-tools/amazon-sp-api/commit/fda7d86dcba2e11444d81fcda157dbc6e6b2912d))

**Merged pull requests:**

- Update README.md [\#19](https://github.com/amz-tools/amazon-sp-api/pull/19) ([ALEXOTANO](https://github.com/ALEXOTANO))

## [v0.3.2](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.2) (2021-01-09)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.1...v0.3.2)

**Commits:**

- Minor formatting changes ([`6ae02f7`](https://github.com/amz-tools/amazon-sp-api/commit/6ae02f76c6332d3ae2dcf654b3276151cc8189d3))
- Added sandbox mode info ([`2383e36`](https://github.com/amz-tools/amazon-sp-api/commit/2383e3675ed9f1fc4aa9ef43f3dbba97c4d69af0))
- Minor restructuring of .callAPI error handling ([`c927aa1`](https://github.com/amz-tools/amazon-sp-api/commit/c927aa1ba30e5f23630c0d2b622028a831d0a857))
- Minor formatting changes ([`76aa07f`](https://github.com/amz-tools/amazon-sp-api/commit/76aa07fe15d8ee90c1f872586126044ce60300b6))
- Added use_sandbox option to Readme ([`f2ed464`](https://github.com/amz-tools/amazon-sp-api/commit/f2ed46458e054985405b59965a1e7b88eaa84926))
- Minor var naming changes ([`fba026c`](https://github.com/amz-tools/amazon-sp-api/commit/fba026c6e88e150b7dd7caeb637397b37817c6de))
- Moved \_sandbox to options as use_sandbox ([`88917ac`](https://github.com/amz-tools/amazon-sp-api/commit/88917ac8ecc9d3c5ba15fbe613e8543bee2d6859))
- Updated readme with new credentials option ([`8f097e3`](https://github.com/amz-tools/amazon-sp-api/commit/8f097e3b13b2e70fc725e5cd849b43cf80aa7681))
- Fixed path info issue ([`dc644e4`](https://github.com/amz-tools/amazon-sp-api/commit/dc644e422b2fc11613adcf514489c2f35fe87d53))
- Added option to load credentials via constructor config object ([`906218a`](https://github.com/amz-tools/amazon-sp-api/commit/906218a9aec4a35bd641dcd9fd124792de21c334))
- Add Sandbox ([`ae10deb`](https://github.com/amz-tools/amazon-sp-api/commit/ae10debe5e893522848cd380a8c7535c809199ee))
- Add sandbox mode ([`83c4427`](https://github.com/amz-tools/amazon-sp-api/commit/83c44279a35d4cc0db033e5b6d66d76878f216ec))

**Merged pull requests:**

- Add sandbox mode [\#18](https://github.com/amz-tools/amazon-sp-api/pull/18) ([ALEXOTANO](https://github.com/ALEXOTANO))
- Add Sandbox [\#17](https://github.com/amz-tools/amazon-sp-api/pull/17) ([ALEXOTANO](https://github.com/ALEXOTANO))

## [v0.3.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.1) (2021-01-07)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.3.0...v0.3.1)

**Commits:**

- Process status enum ([`135d68a`](https://github.com/amz-tools/amazon-sp-api/commit/135d68aff966b5e0e6a8c5f97a04e3d707c98533))
- Add string type to operation ([`784155b`](https://github.com/amz-tools/amazon-sp-api/commit/784155bc4df926f5af6466b75c54b42047e0c98c))
- Fix location ([`909957b`](https://github.com/amz-tools/amazon-sp-api/commit/909957bac818e4ca54b24e9ac81753e0699a7189))
- Move download to own file ([`c594ac9`](https://github.com/amz-tools/amazon-sp-api/commit/c594ac9c8e40b509c2ed58f727253b8441a87cb6))
- Kebab to camelCase ([`a0a28c3`](https://github.com/amz-tools/amazon-sp-api/commit/a0a28c3d4daddf90652cacb175352d8fa012af8b))
- Types as dev dep ([`79949f3`](https://github.com/amz-tools/amazon-sp-api/commit/79949f37ea3308b593081dab139cde44d2e7a9aa))
- Revert packagelock name ([`187142d`](https://github.com/amz-tools/amazon-sp-api/commit/187142dba0bfab7b9e0571dc7a303c16b19fa0ae))
- Add readme ([`e459d96`](https://github.com/amz-tools/amazon-sp-api/commit/e459d96924a3e9be88472421fd2e8422ea617137))
- Revert to origial name ([`2bd88d4`](https://github.com/amz-tools/amazon-sp-api/commit/2bd88d49d3ec13364906e76e7478c6e7db498826))
- Extend generic ([`45abb22`](https://github.com/amz-tools/amazon-sp-api/commit/45abb22d8d53f8e9dcee2cffe279e06187d0fb7f))
- Generic for download ([`ba3504b`](https://github.com/amz-tools/amazon-sp-api/commit/ba3504b8ca7f70c88f04e556377a1d84d526883e))
- Add operations ([`ce03e2f`](https://github.com/amz-tools/amazon-sp-api/commit/ce03e2f18cd530aacbb2a210608ecbd52f5ed0d7))
- Default to any since not all operations are typed and added download ([`0ee531e`](https://github.com/amz-tools/amazon-sp-api/commit/0ee531e16d34513935b2383b3c53c82ddb916f57))
- Export report document type ([`b6928be`](https://github.com/amz-tools/amazon-sp-api/commit/b6928beaf70d9ec6e3469c6b9f7069f42ec40985))
- Add part of the reports api ([`feb1edf`](https://github.com/amz-tools/amazon-sp-api/commit/feb1edfbd5582af376add3c3e1b1b82de8972bf2))
- Add partial fulfillment ([`deb1560`](https://github.com/amz-tools/amazon-sp-api/commit/deb1560164dc07cb610077476aed72849dbb54ad))
- Add finances api ([`5615457`](https://github.com/amz-tools/amazon-sp-api/commit/561545710ac996bc03a0e999c2f092c8125aa6da))
- Add feeds api ([`8da76fb`](https://github.com/amz-tools/amazon-sp-api/commit/8da76fbb61f32bda1825d6c7b7a55b7a30e30f4c))
- Add fba small and light api ([`a6b1cd6`](https://github.com/amz-tools/amazon-sp-api/commit/a6b1cd6d16f6fec7b16afcc601ad35d704777398))
- Add fba inventory ([`f230bfa`](https://github.com/amz-tools/amazon-sp-api/commit/f230bfa634dcf26fdd2143be70d9a4bd9f10b545))
- Add first few operations ([`5c1cfcb`](https://github.com/amz-tools/amazon-sp-api/commit/5c1cfcbe374b58929d9951c7340ffa5f5fc59e68))
- Testing package types ([`ac5c9ea`](https://github.com/amz-tools/amazon-sp-api/commit/ac5c9ea6186bf71cbfa293fafaef6ee2ae5446a0))
- Export interfaces and add refresh functions ([`a999caf`](https://github.com/amz-tools/amazon-sp-api/commit/a999cafe8e76f520ac8539cbc7e921843ca481ce))
- Add export ([`1b4d862`](https://github.com/amz-tools/amazon-sp-api/commit/1b4d8625fada8de8c5b9d2c1b4c77707054d7a55))
- Add constructor type for testing ([`db0d1d6`](https://github.com/amz-tools/amazon-sp-api/commit/db0d1d65a904b75432435d6c6861b4723a868bdd))
- Add base tsconfig file ([`5146deb`](https://github.com/amz-tools/amazon-sp-api/commit/5146debb99255ab2a441274fa920ac2a035a3c6b))

**Merged pull requests:**

- Foundation for adding typings [\#14](https://github.com/amz-tools/amazon-sp-api/pull/14) ([nohara-embark](https://github.com/nohara-embark))

## [v0.3.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.3.0) (2021-01-03)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.6...v0.3.0)

**Commits:**

- Added documentation for .upload() function, which will encrypt and upload feeds ([`ee30bd2`](https://github.com/amz-tools/amazon-sp-api/commit/ee30bd2f6fa7ccd7bdef4a07879612a6f97ea186))
- Added new upload function that encrypts and uploads feed documents ([`e82951d`](https://github.com/amz-tools/amazon-sp-api/commit/e82951dcc673d4e41c1478f6dc9cc4e3e958f78b))
- FIX: URL not defined in certain NodeJS versions ([`0939aa2`](https://github.com/amz-tools/amazon-sp-api/commit/0939aa272c4bce1fc2a528a6d9a6ef8df6108a1c))
- Add alternate variables for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY ([`3416fcd`](https://github.com/amz-tools/amazon-sp-api/commit/3416fcdbd8695fe083523f702202e7f185868cb7))
- Removed logic of planned TODO for checking not only path but body and querystring params of operations as well --> not neccessary as SP API error messages are meaningful for body and querystring params ([`0966bc0`](https://github.com/amz-tools/amazon-sp-api/commit/0966bc0980dc3f3caae1557e63c420593c22be10))
- fix: Error code example ([`ac1cb7b`](https://github.com/amz-tools/amazon-sp-api/commit/ac1cb7b333df12778358fc41136fc2d1b9f50097))

**Merged pull requests:**

- FIX: URL not defined in certain NodeJS versions [\#13](https://github.com/amz-tools/amazon-sp-api/pull/13) ([ALEXOTANO](https://github.com/ALEXOTANO))
- Tweak: Add alternate variables for AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY [\#12](https://github.com/amz-tools/amazon-sp-api/pull/12) ([ghost](https://github.com/ghost))
- fix: Error code example [\#9](https://github.com/amz-tools/amazon-sp-api/pull/9) ([wangjue666](https://github.com/wangjue666))

## [v0.2.6](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.6) (2020-12-20)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.5...v0.2.6)

**Commits:**

- Added basic testing for some operations ([`827ae6d`](https://github.com/amz-tools/amazon-sp-api/commit/827ae6d2dbad904e134cd4f67bd5240e6f1afafb))
- Added information to getInventorySummaries --> only available in NA region ([`df44573`](https://github.com/amz-tools/amazon-sp-api/commit/df4457332c68c8892824c5c441c9ccf85ce59e2f))

## [v0.2.5](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.5) (2020-12-08)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.4...v0.2.5)

**Commits:**

- Fixed missing "/" in orders api paths ([`c036b49`](https://github.com/amz-tools/amazon-sp-api/commit/c036b4913e678f188c748f85aad05ea723925c56))

## [v0.2.4](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.4) (2020-12-07)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.3...v0.2.4)

**Commits:**

- Fixed "getMyFeesEstimateForASIN" path and minor readme update ([`57c6f9a`](https://github.com/amz-tools/amazon-sp-api/commit/57c6f9ad0eac468f8ce2b0d27a84c2c089bd0eb4))

## [v0.2.3](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.3) (2020-11-28)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.2...v0.2.3)

**Commits:**

- Fixed missing import ([`b551ae8`](https://github.com/amz-tools/amazon-sp-api/commit/b551ae805a3e6fc2fe060510fc32c5e8b6f6d71f))

## [v0.2.2](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.2) (2020-11-27)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.1...v0.2.2)

**Commits:**

- Replaced "fs/promises" with standard version with cb to support older node versions ([`61c1ea9`](https://github.com/amz-tools/amazon-sp-api/commit/61c1ea94997f0a39b4f2ee856121a7b1383d95ea))

## [v0.2.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.1) (2020-11-27)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.2.0...v0.2.1)

**Commits:**

- Added .download() function for reports --> downloads, decrypts and unzips reports ([`506c833`](https://github.com/amz-tools/amazon-sp-api/commit/506c833dc308963ef9ecf523c9ee4fc8033bbf58))

## [v0.2.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.2.0) (2020-11-21)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.1.1...v0.2.0)

**Commits:**

- Changed .callAPI to use operation instead of path, added support for retry throttled requests in sync with restore rates ([`39bea31`](https://github.com/amz-tools/amazon-sp-api/commit/39bea3119c0d46585e2d4bf49259ee36786e9011))

## [v0.1.1](https://github.com/amz-tools/amazon-sp-api/tree/v0.1.1) (2020-11-16)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/v0.1.0...v0.1.1)

**Commits:**

- Fixed issue with arrays as part of GET parameters ([`28da886`](https://github.com/amz-tools/amazon-sp-api/commit/28da886f7c087d88ec4245641555fb3f42e46c0e))

## [v0.1.0](https://github.com/amz-tools/amazon-sp-api/tree/v0.1.0) (2020-11-16)

[Full Changelog](https://github.com/amz-tools/amazon-sp-api/compare/dabe478daa94b5869d9254a5229a1932e8269ddc...v0.1.0)
