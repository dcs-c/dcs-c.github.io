# AGM-88C HARM

## 개요

AGM-88C HARM은 대레이더 미사일로 적의 지대공 방공 포대에서 탐색 및 추적레이더가 날 락온하기 위해 내뿜는 레이더파를 역으로 쫓아가 적의 머리에 꽂히는 미사일이다 적의 지대공 방공 포대 레이더를 박살내는 SEAD 미션에서 빈번하게 사용되는 미사일로 마하 2~3의 속도로 내리 꽂아 요격 당할 확률을 낮춘다

## RWR

함 사용법에 앞서 RWR을 설명하겠다

RWR이란 Radar Warning Receiver, 레이더 경보 수신기 라는 뜻으로 적이 나에게 미사일을 발사하기 위해 레이더로 조사하는걸 감지하고 알려주는 장치다 

<img width="482" height="543" alt="스크린샷 2025-12-22 190643" src="https://github.com/user-attachments/assets/38bc2315-7e15-427c-95d8-b3b9a0ad5994" />

> RWR은 우측 MFD 아래쪽에 위치해 있으며 원형으로 3개의 구역이 나눠져 있다, RWR은 현 기체의 방향을 기준으로 나타내준다 사진 기준으로 12시 방향에 레이더파를 뿜어내어 내 기체를 찾은 P-19 탐지레이더가 있음을 나타낸다

> 사진에서 파란색 구역은 Non-Dangerous Zone이며 내 기체를 탐지하는 레이더가 발견이 되었다 정도의 뜻이다 , 만약 심볼이 노란색 구역은 적이 추적레이더로 날 락온하여 미사일을 쏠 준비를 하고 있다는 뜻으로 Dangerous Zone라고 부른다, 심볼이 빨간색 구역까지 들어왔다면 이는 Critical zone으로 적이 나에게 미사일을 쏜게 감지되었다는 뜻이다

<img width="800" height="1200" alt="BT-DAY-RWR" src="https://github.com/user-attachments/assets/29f4f411-7dd7-4758-9d40-676b141641d3" />

> 적에 따른 심볼은 해당 목록을 확인하면 된다, 하지만 무조건 적만 뜨는것은 아니며 아군 레이더도 같이 뜨니 참고할것 심지어 본인에게 날라오는 미사일이 아니여도 미사일의 레이더파가 우연히 본인 기체에 닿으면 미사일이 날라오는것 처럼 RWR이 울릴 수도 있다

> 해당 사진을 C드라이브-사용자-USER(혹은 이름)-저장된게임-DCS-Kneeboard-F/A-18C_Hornet에 넣으면되는데 호넷 파일이 없을 경우 F/A-18C_Hornet 이름으로 폴더를 만들어 그 안에 넣어두면 인게임에서 K키를 눌러 니보드에서 해당 차트를 확인 할 수 있다

## 사전 준비

<img width="905" height="778" alt="image" src="https://github.com/user-attachments/assets/e5773b8d-6b3f-4b3a-8a32-3f86713b7aae" />

> 함은 2,3,7,8번 파일런에 1개씩 총 4개가 장착이 가능하다

<img width="682" height="618" alt="image" src="https://github.com/user-attachments/assets/19885928-631f-4b50-a920-d7965206c038" />

> A/G모드, 마스터 암, 스토어페이지에서 HARM 선택

> 선택 후 MFD 화면을 보면 SP,TOO, PB 총 3개의 발사 모드가 있다

## SP모드

SP모드는 본인 기체에서 가장 위협적인 레이더를 찾아가 박살내는 Self-Protect 모드다 갑작스럽게 레이더 락온을 당하게 되었을때 아무런 동작 필요 없이 그저 무장 발사버튼만 눌러 자동으로 가장 위협적인 레이더를 찾아가 박살내는 모드인데 문제는 추후 서술할 LOFT 동작을 하지도 않고 그냥 발사해버리면 사거리 및 종말속도가 압도적으로 짧아지니 갑자기 숨어있던 근거리 방공을 만나는게 아닌 이상 가급적 잘 안쓰는 모드이다

사용법도 그냥 SP모드 체크 해두고 갑작스럽게 적 방공망의 락온을 당했을때 WEAPON RELEASE 버튼을 눌러 발사하면된다

## TOO모드

TOO모드는 함의 레이더 시커를 이용하여 적을 직접 락온하여 발사하는 방식이다 조작법도 단순하기에 자주 쓰는 모드이다

<img width="866" height="685" alt="image" src="https://github.com/user-attachments/assets/d9e9e05a-8467-4d6b-83f6-a20d72c8c520" />
<img width="742" height="590" alt="image" src="https://github.com/user-attachments/assets/907056aa-cf89-4326-b4f3-193eb9d746e0" />

> TOO모드를 선택하게 되면 해당 화면이 나오게되는데 함 레이더 시커에 감지되는 적이 표시된다 락온 준비된 대상은 초록색 네모박스가 쳐지며 초록색 네모박스를 다른 타겟으로 욺기고 싶으면 I키를 눌러 타겟을 바꿀 수 있다 초록색 네모박스가 쳐진 상태에서 해당 화면으로 SOI 시킨 후 C키를 누르면 H-OFF문구가 뜨면서 해당 레이더로 락온이 된다

<img width="1040" height="783" alt="image" src="https://github.com/user-attachments/assets/2ddf454b-1e5b-4c46-b3d1-9836811019e8" />

> 해당 표시는 HUD도 표시된다

<img width="2349" height="1356" alt="image" src="https://github.com/user-attachments/assets/62b00718-8fa6-4dc5-9ff4-d499328eb7c5" />

> 특히 TOO모드로 사격할떄 적과의 거리가 명확하게 표시되지 않음으로 최대한 멀리 그리고 빠르게 던지기 위해 고도를 높히고 속도를 올린 상태에서 함 레이더 시커의 락이 풀리지 않는 최대한의 각도로 발사하는데 이를 LOFT라고 한다 또는 고도랑 속도를 올리며 해당 레이더 방향으로 날아가다가 RWR에서 Dangerous zone으로 적 심볼이 들어오면 그때 바로 발사하는것이 바람직하다 

<img width="1833" height="1213" alt="image" src="https://github.com/user-attachments/assets/9afbfbb2-ab1d-4c5d-bf59-f3c8698e17da" />
<img width="1977" height="1303" alt="image" src="https://github.com/user-attachments/assets/78b5ed5c-b8a5-4608-a5bf-385cd9b89705" />
<img width="2010" height="1285" alt="image" src="https://github.com/user-attachments/assets/88b37f4e-fdd7-49af-9520-c9eddbc565f0" />
<img width="1856" height="1115" alt="image" src="https://github.com/user-attachments/assets/4817634e-551f-4fa0-9b3d-98aab4b77a1c" />
<img width="2260" height="1341" alt="image" src="https://github.com/user-attachments/assets/9aef280f-c9b2-4e35-91e3-a7ad21dce827" />

## PB모드

적의 방공위치 및 종류등을 미리 알고 있을때 사격하는 방법으로 가장 적절한 로프트 각도와 발사시 거리등을 알려주기에 TOO모드와 같이 유용하게 사용가능한 모드다

<img width="653" height="531" alt="image" src="https://github.com/user-attachments/assets/4fe4c916-d331-4232-b4fc-5c292bc9fe39" />

> PB모드를 체크하게 되면 우측에 UFC 버튼와 PB버튼 아래에 2개의 버튼이 추가된다
>> - A/C : 적을 향해 사격할때 기체 자체를 상승시켜 투포환 던지듯이 LOFT로 던지는 모드
>> - HRM : 기체가 아닌 함 자체를 상승시켜 LOFT로 던지는 모드, 기체가 아닌 함의 추진 연료를 소모시켜 상승하기에 사거리는 짧아지지만 기체 자세를 유지 할 수 있다는 점에서 적 방공 미사일이 날아올때 회피하기 수월하다는 장점이 있다
>> - UFC : 타겟으로 할 방공 레이더의 식별코드를 입력하는 버튼

<img width="1799" height="1230" alt="image" src="https://github.com/user-attachments/assets/12312ee7-db37-4980-9ac6-1af66bbab186" />

> 우선 PB모드의 A/C 체크 후 적 방공이 있는 위치에 타겟팅포인트를 생성하면 HUD에 타겟팅포인트를 기준으로 기다란 선이 생기는데 기체의 FPM을 이 선에 맞춰서 비행해준다

<img width="1760" height="1118" alt="image" src="https://github.com/user-attachments/assets/5a3e82c3-e231-4f17-a016-6b2984287278" />

> 사전 브리핑으로 상대 방공망은 SA-2로 확인됨으로 SA-2에 사용하는 SNR-75 추적레이더와 P-19 탐지레이더가 있는 것으로 확인되니 그 중 미사일 발사 및 추적을 하는 SNR-75 추적레이더를 노려주겠다

<img width="357" height="924" alt="image" src="https://github.com/user-attachments/assets/1f69767a-16b4-4275-b896-c2238b98ccd4" />
<img width="1838" height="1180" alt="image" src="https://github.com/user-attachments/assets/3f08738d-e711-42f0-87e3-f1c7c55c77c5" />

> RWR에서 봤던 니보드에서 SNR-75의 함 코드인 126을 UFC를 눌러 TGT 선택 후 126을 입력해준다

<img width="592" height="520" alt="image" src="https://github.com/user-attachments/assets/12f22da4-17e1-46e1-8153-2c342224d2c2" />

> 그럼 함이 준비 되며 함코드 126 즉 SNR-75를 찾아 날아갈 준비가 되었다, 이후 타겟팅포인트를 향해 날아가준다

<img width="783" height="721" alt="스크린샷 2025-12-22 202815" src="https://github.com/user-attachments/assets/ffd38240-d844-400c-8d18-2d4a957450b1" />

> 타겟팅포인트를 향해 날아가다가 함 사거리가 준비되면 A/C RNG 표시가 뜬다
>> 1. A/C RNG 표시가 떳을때 천천히 기수를 상승 시켜주다 보면 해당 가로선이 FPM과 맞닿는 때가 있는데 이때 발사하면된다
>> 2. 추후 HRM 모드에서 사용될 괄호다
>> 3. IN RNG 표시다

<img width="747" height="661" alt="image" src="https://github.com/user-attachments/assets/0ab8fc8c-511a-4709-835d-48821b4dab5b" />

> A/C RNG 표시가 HUD에 떳을때 천천히 수직선에 FPM을 맞춰 기수를 당기다보면 가로선과 FPM이 만나게되는데 그때 발사하면된다

<img width="2065" height="1222" alt="image" src="https://github.com/user-attachments/assets/9b3e9d20-64de-42b9-8454-11460d30b502" />
<img width="1825" height="1277" alt="image" src="https://github.com/user-attachments/assets/46f07eb4-b9c0-4cc4-97ac-1c2c9e611bed" />
<img width="1890" height="1286" alt="image" src="https://github.com/user-attachments/assets/b307c95b-d52b-43c4-bf78-f799f755a1fb" />
<img width="1713" height="1100" alt="image" src="https://github.com/user-attachments/assets/94878bee-0abd-44cf-99bd-a4ce1b5ce2d6" />
<img width="1956" height="1257" alt="image" src="https://github.com/user-attachments/assets/e490622f-8ef6-44d0-8da3-9c9f63c4a324" />

다음은 HRM 방식으로 사격해보겠다

<img width="1831" height="784" alt="image" src="https://github.com/user-attachments/assets/6baef90d-76be-421a-9fb7-4c7354074410" />
<img width="1832" height="757" alt="image" src="https://github.com/user-attachments/assets/4ddaa250-957d-4151-9926-d4630f2ea4d7" />
<img width="754" height="646" alt="image" src="https://github.com/user-attachments/assets/f75e5139-6de6-44da-9bb0-3b9666af73d1" />

> HRM 체크, 적 방공이 있는곳으로 타겟팅포인트 생성, UFC를 눌러 SNR-75 함코드 126 입력, 타겟팅포인트를 향해 진입

<img width="754" height="646" alt="스크린샷 2025-12-22 203829" src="https://github.com/user-attachments/assets/0adc86a4-d4d7-4d95-b4e2-52b87bab72b4" />

> 진입하다보면 괄호가 FPM이 있는대까지 내려오는데 그때 발사하면된다, 속도가 빠를수록 고도가 높을 수록 더 빨리 내려온다

<img width="1605" height="1184" alt="image" src="https://github.com/user-attachments/assets/eae4b423-7a06-4ac9-943b-a9233132d69d" />
<img width="1634" height="1192" alt="image" src="https://github.com/user-attachments/assets/5f6981b2-0eb7-4741-8fa9-07158f59875a" />
<img width="1213" height="893" alt="image" src="https://github.com/user-attachments/assets/f2a666cc-5245-41d8-a3ef-df0bb3ee0751" />
<img width="1538" height="1069" alt="image" src="https://github.com/user-attachments/assets/9f240089-f42c-475b-8415-7b8b902f243d" />
<img width="1549" height="1281" alt="image" src="https://github.com/user-attachments/assets/a38bb199-6ea4-42dd-83a8-4f3a472798e4" />

> 함 자체가 상승하여 타격하기 때문에 기체의 속도가 줄어들지 않아 회피나 방어기동이 수월한 모습, 이후 자체 상승한 함이 적 레이더를 파괴한다
