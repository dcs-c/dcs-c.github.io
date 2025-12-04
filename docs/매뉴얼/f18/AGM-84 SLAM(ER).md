# AGM-84E/H SLAM(ER)

## 개요

AGM-84 SLAM은 Stand off Land Attack Missle로 줄여서 통칭 슬램이라고 부른다 하푼 동체 및 추진체에 매버릭 F형의 적외선 시커, 월아이의 데이터링크 시스템, 제이담의 INS/GPS 유도 장치를 넣고 거리 확정형 SLAM ER은 제이소우의 날개까지 붙여 만든 최대사거리 150마일(기본형 슬램의 경우 약 100마일)의 만능 공대지 키메라 미사일이다

물론 이렇게 많은 시스템이 탑재되어있고 추진체 연료까지 넣다보니 앞서 서술한 폭탄 무장들에 비해 파괴력이 약한 편이다, 하지만 슬램은 파괴력보단 장거리에서 높은 명중률을 보이는데에 의의를 둔 무장이기에 크게 단점이 되지 않는다 심지어 그저 일직선으로만 날아가기만 하는 제이소우와 제이담과 달리 자체 지형 식별이 가능하여 저공 비행시 앞에 산맥이 있는 경우 자체 상승하여 지형과의 충돌을 피한다

## 사용법

<img width="1062" height="588" alt="image" src="https://github.com/user-attachments/assets/673b8fee-a8b2-4f98-8723-f45ec4da0f0a" />

> 슬램은 2,3,7,8번 파일런에 장착 가능하며 기본형인 AGM-84E형과 거리 확정형인 AGM-84H형이 있다 두가지가 있지만 사거리만 다를뿐 사용절차는 동일하기에 본 문서에서는 사거리 확장형인 H형을 토대로 설명하겠다

<img width="640" height="482" alt="image" src="https://github.com/user-attachments/assets/438d2b34-3c1d-43f2-9bfb-458a900f9d22" />

> A/G모드, 마스터 암 ON, 스토어 페이지에서 SLAM ER 선택

<img width="607" height="457" alt="스크린샷 2025-12-04 100941" src="https://github.com/user-attachments/assets/e4abdeda-165c-4382-9e9d-367f573f0299" />

> 1. 제이담과 제이소우 처럼 GPS/INS 기반 유도 시스템이기에 약 2분 30초 가량의 정렬을 해줘야한다

> 2. MODE
>> - PP: 제이소우 제이담에서 서술 했듯 좌표를 슬램자체에 입력하여 발사하는 방식.
>> - TOO : 제이소우 제이담에서 서술 했듯 타겟팅포드 및 웨이포인트를 통해 타겟팅포인트 지정하여 좌표 추출 후 발사하는 방식, 슬램은 타겟팅포드로 포착 가능한 거리보다 더 멀리서 발사 할 수 있으므로 웨이포인트로 타겟팅포인트 생성하는거나 스티어포인트를 사용할게 아니라면 제이소우 제이담과 달리 PP모드를 주로 사용하는 편이다.

> 3. FLY : 하푼 처럼 타겟과 근점해지기 전 슬램의 비행고도를 설정 할 수 있다, 타겟의 위치 정보다 본인의 기체 고도를 참고하여 설정한다
>> - HIGH : 3만피트
>> - MED : 1만 5천피트
>> - LOW : 5천피트

> 4. EFUZ : 신관 설정이다 제이담과 달리 제이소우 처럼 ON OFF 기능만 있다

> 5. STP : 스티어 포인트 지정하는 버튼이다 같은 유도방식을 지닌 제이소우나 제이담과 다르게 자체 추진체가 있어 스티어 포인트를 지정하여 슬램이 스티어 포인트를 경유하여 도달 할 수 있게 해준다, 한마디로 보통 일직선으로 투하되거나 발사되는 여타 무장들과 다르게 작전의 필요성에 따라 슬램이 옆으로 경유하여 지나가게 설정 할 수 있다

> 6. SLMR DSPLY : 제이소우 제이담과 마찬가지로 PP모드로 사격시 슬램 내에 좌표를 입력 할 수 있는 창이다 SLMR DSPLY - MSN - TGT UFC 선택 후 좌표 지정

> 7. STEP : 파일런에 장착된 슬램 중 무엇을 발사 할지 선택하는 순환 버튼이다

## PP모드 사용법

<img width="589" height="511" alt="image" src="https://github.com/user-attachments/assets/1d575037-2bfd-42d9-98e3-33bf12fca41b" />

> PP모드 선택, EFUZ ON, FLY LOW(5천피트)로 설정한다 

<img width="1878" height="1041" alt="image" src="https://github.com/user-attachments/assets/caa0016a-2aeb-433d-9185-746bacf1e52b" />
<img width="1710" height="1232" alt="image" src="https://github.com/user-attachments/assets/ef0e4916-716c-4f0f-8696-f96c009ce6b1" />
<img width="524" height="486" alt="image" src="https://github.com/user-attachments/assets/8e492fbe-ec6f-473a-ba23-4642fa8cd539" />
<img width="1079" height="1136" alt="image" src="https://github.com/user-attachments/assets/fdc735d3-15c3-4378-ab59-106eaf5b9947" />

> DSPLY - MSN - TGT UFC를 눌러 제이담에서 서술했듯 적의 좌표(8자리)를 입력한다

<img width="1496" height="1188" alt="image" src="https://github.com/user-attachments/assets/e83ec884-f681-4b59-9101-ff88cec339b1" />

> 이후 생성 된 타겟팅 포인트를 향해 대충 기수를 돌린 후(자체 추진체가 있다보니 각도가 너무 큰게 아니라면 투하 이후 슬램이 알아서 선회한다) Weapon Release 버튼을 눌러 투하한다

<img width="1760" height="923" alt="image" src="https://github.com/user-attachments/assets/ce922a8e-677c-4ef0-8b79-428da14fbd96" />
<img width="1206" height="736" alt="image" src="https://github.com/user-attachments/assets/bdbe99f4-0531-4459-bc2f-74d89fa76977" />
<img width="1072" height="1292" alt="스크린샷 2025-12-04 103448" src="https://github.com/user-attachments/assets/bd9bd297-7cb2-4989-8c11-e7aa62a13000" />
<img width="1488" height="944" alt="image" src="https://github.com/user-attachments/assets/63bc6a04-3355-48e1-9c93-f1d64d84ab90" />
<img width="1424" height="832" alt="image" src="https://github.com/user-attachments/assets/7999221a-4b52-48e5-a365-759ff5a56ade" />
<img width="1940" height="1180" alt="image" src="https://github.com/user-attachments/assets/24c07a22-3104-4f93-8716-a8c58dca866c" />

순항 미사일이다보니 속도자체는 느리지만 좌표 지정으로 정밀한 타격과 저공 비행시 경로상에 있는 지형을 자체 식별하여 상승과 하강을 하며 약 150마일이라는 먼 거리에서 적 방공을 안전하게 타격 할 수 있는 좋은 무장이다 

## TOO모드 사용법

<img width="597" height="484" alt="image" src="https://github.com/user-attachments/assets/a89dc73b-5ab8-490e-b20d-12cd58e34685" />

> TOO모드 선택, EFUZ ON, FLY LOW로 설정

<img width="1997" height="1305" alt="image" src="https://github.com/user-attachments/assets/d5b9f560-0420-4e44-9fa8-e3822c4e9c2c" />

> 적의 위치 정보를 웨이포인트에 입력 후 타겟팅포인트 생성, 웨이포인트로 타겟팅포인트를 생성하여 좌표를 입력하는 방식은 하단에 서술할 스티어포인트에서도 사용되는 방법이니 참고

<img width="989" height="1171" alt="image" src="https://github.com/user-attachments/assets/722d5201-cb55-4d45-a191-97a59fe19c5c" />

> 이후 투하한다

<img width="945" height="750" alt="image" src="https://github.com/user-attachments/assets/512d8488-50d2-4b32-98f2-e97d9b0c7d1c" />
<img width="2129" height="1348" alt="image" src="https://github.com/user-attachments/assets/49c23d5c-a471-4459-9f85-4b54fb828a63" />

## TOO모드 스티어포인트

위 문서에서 서술 했듯 스티어 포인트를 통해 슬램이 해당 스티어 포인트를 통과하게 하여 본인이 원하는대로 적 방공망을 피해 옆으로 선회하게 할 수 있는 기능이다

<img width="808" height="983" alt="image" src="https://github.com/user-attachments/assets/a1e9e6a2-2bae-47f7-ae6e-4edad7e90d28" />

> 웨이포인트를 해당 사진처럼 1,2,3번을 지정해놓는다(본인이 선회 시키고 싶은대로지만 너무 급격한 선회는 시키지 않는게 좋다, 1번과 2번이 선회지점, 3번이 타격포인트다)

<img width="606" height="503" alt="image" src="https://github.com/user-attachments/assets/daf5b526-8392-4c5b-8df3-d9b3159c7e09" />

> 사전 설정은 위에 서술 한 TOO모드 설정과 동일하다

<img width="1022" height="549" alt="스크린샷 2025-12-04 111213" src="https://github.com/user-attachments/assets/c097a2a0-8ac7-44ba-8ea1-e3549a514415" />

> 이후 STP 버튼을 누르면 중앙 UFC에 STP1이라고 초록색 글자가 뜨는데 스티어 포인트 1번을 뜻하며 옆에 검은 버튼을 눌러 선택해준다

<img width="520" height="362" alt="image" src="https://github.com/user-attachments/assets/ffa108b8-da9c-4ca0-a479-f4b8e046743a" />

> 그럼 다음 사진 처럼 초록색 글자들이 여럿 생기며 이에 대한 설명은 아래와 같다

>> VEL : 해당 스티어포인트(1번)을 통과시 속도 설정

>> WYPT : 경유 할 웨이포인트

>> POSN : 경유 할 좌표 직접 입력

>> ALT : 직접 고도 입력

>> DEL : 스티어포인트 삭제

<img width="537" height="365" alt="스크린샷 2025-12-04 111820" src="https://github.com/user-attachments/assets/b500e405-3c10-4dab-a5b8-fd843f0a4495" />
<img width="535" height="364" alt="스크린샷 2025-12-04 111828" src="https://github.com/user-attachments/assets/8b1be6b0-82ac-46a0-a038-eac17b6f95b3" />

> WYPT를 선택 후 UFC 패널에 숫자 1을 입력 후 엔터 그러면 HSI상 사전 입력되어있던 웨이포인트 1번의 좌표가 스티어포인트 1번으로 설정된다, 설정된 이후 STP2가 생기며 2번째 스티어포인트도 설정이 가능하다

<img width="532" height="371" alt="image" src="https://github.com/user-attachments/assets/b05303c0-1f02-47f1-8f9f-a822a73a2475" />
<img width="512" height="353" alt="스크린샷 2025-12-04 112027" src="https://github.com/user-attachments/assets/791b7a96-44f3-4047-a9b0-468ae37610c5" />

> 이후 스티어포인트 2번에 웨이포인트 2번을 입력 해준다, 우리는 스티어 포인트 2번까지만 선회하고 3번 웨이포인트를 타겟팅포인트로 선택해 타격할것이기에 STP3는 설정할 필요는 없다

<img width="1862" height="1169" alt="image" src="https://github.com/user-attachments/assets/c11c66d8-9820-4ec4-8c64-54cc21dd37dd" />

> 스티어 포인트 2번까지 설정이 완료 되었다면 HSI에서 3번 웨이포인트를 타겟팅포인트로 설정하고 투하하면 된다

<img width="933" height="1130" alt="스크린샷 2025-12-04 112932" src="https://github.com/user-attachments/assets/5587ffc2-bca7-44d2-b350-f729071a89c4" />

> 1번 스티어 포인트를 향해 날아가는 슬램

<img width="1555" height="1239" alt="스크린샷 2025-12-04 113042" src="https://github.com/user-attachments/assets/ed2dd08b-d9c0-4444-ba1b-ed6cd925a5ff" />

> 1번 스티어 포인트에서 선회하여 2번 스티어포인트를 향해 날아간다

<img width="1269" height="1169" alt="스크린샷 2025-12-04 113142" src="https://github.com/user-attachments/assets/4a7aaf03-a2d3-4657-98da-0b707e4db33b" />
<img width="1173" height="794" alt="image" src="https://github.com/user-attachments/assets/398f72cd-2aa9-44af-abb3-0477f575e066" />
<img width="533" height="452" alt="image" src="https://github.com/user-attachments/assets/5a3afed7-b411-42f9-a260-fa86b80980e9" />
<img width="622" height="434" alt="image" src="https://github.com/user-attachments/assets/23ddf219-00c3-4d22-808e-94b20c8bc1aa" />
<img width="1660" height="1222" alt="image" src="https://github.com/user-attachments/assets/158332a0-1ecb-43b3-a1c8-ad411d67e9ed" />

> 2번 스티어 포인트를 지나 3번 타겟팅포인트를 향해 날아가 적을 타격한다

추가로 직선거리가 150마일 이하여도 스티어포인트로 인해 선회하는 총 이동거리가 150마일 이상이면 IN RNG 큐가 안뜨니 주의할것, 거기에 선회 반경이 너무 크면(80도 이상) 타겟팅포인트로도 안가고 그냥 이탈해버린다

심지어 월아이의 데이터링크 시스템도 있어 추후 서술 할 무장데이터링크를 통해 적 타격 10마일 혹은 설정에 따라 투하 이후 목표를 변경하거나 이동중인 적을 타격 할 수 있다
