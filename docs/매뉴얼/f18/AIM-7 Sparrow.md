# AIM-7 Sparrow

## 개요

AIM-7 Sparrow, 통칭 스페로우 라고 불리는 중거리 공대공 미사일은 반능동 미사일로 모기체의 레이더를 기반으로 하여 적을 추적하는 미사일이다 기총보다 사거리가 훨씬 길며 적 이동 방향에 맞춰 기체를 기울여야 하고 명중시키기도 어려웠던 기총과 달리 멀리서부터 레이더로
적을 락온 하면 미사일이 해당 정보를 토대로 자체 선회하여 적을 명중시킨다 하지만 모기체의 레이더를 기반으로 추적하기에 레이저 유도 폭탄 및 매버릭 E형 처럼 지속적으로 유도를 해줘야하기에 발사 후 선회가 어려워 어택포지션을 잡지 않으면 사용하기 어렵고 기본적으로 작지 않은 형상으로 인해 2,3,4,6,7,8번 파일런에 각각 하나씩만 장착된다 해당 이유로 PVP 서버나 다른 미사일을 쓸 수 있는 현대전 기반 서버에서는 거의 쓰지 않는 미사일이다

## 사전 준비

<img width="642" height="777" alt="image" src="https://github.com/user-attachments/assets/ab1809db-4129-4437-92c5-dba6343fde6b" />

> 위에서도 서술 했듯 스패로우는 2,3,4,6,7,8번 파일런에만 장착되며 각 파일런당 1발씩만 장착이 가능하다

<img width="1783" height="1241" alt="image" src="https://github.com/user-attachments/assets/1174ccf5-57fc-4e96-ac66-99f4f4727210" />

> A/A모드, 마스터 암 ON, L Shift + W(필요에 따라 스틱에 할당 할 것)를 누르면 자동으로 스패로우 미사일이 선택된다

## 공대공 레이더 

스패로우 사용법에 앞서 스패로우의 사용을 위해 간단하게 공대공 레이더를 설명한다

<img width="599" height="559" alt="스크린샷 2025-12-22 134622" src="https://github.com/user-attachments/assets/6a97955c-c1e8-4a44-9f3a-08ec464cfc39" />

> 1. 레이더의 스캔 바를 의미한다
>> <img width="455" height="291" alt="image" src="https://github.com/user-attachments/assets/89cfffcc-dbe1-4686-b538-8474a3d8de23" />
>> - 1B, 2B, 4B, 6B등이 있으며 숫자가 높을 수록 레이더가 수색 패턴을 늘려가며 더 넓게 움직이며 스캔한다 덕분에 더 넓은 범위의 스캔이 가능하지만 왔다갔다 하는 시간이 길기때문에 한번 포착된 적이 이동하여 레이더 탐지가 어려운 곳으로 가버리면 레이더 락이 끊겨버리기도 하니 상황에 따라서 조절해서 사용해야한다

> 2. 레이더 모드 선택 버튼이다
>> - RWS(Range While Search): 기본적인 탐색모드로 넓은 구역을 탐지하고자 할때 사용한다
>> - TWS(Track While Scan): 다중 추적 모드로 여러마리의 적을 락온하고 탐지하고자 할때 사용되며 RWS보다는 좁은 범위의 구역을 수색한다, 락온된 적은 방향과 접근정도 및 거리에 따라 우선순위가 레이더에 표시되며 그에 따라 우선순위를 따라 적에게 미사일을 발사 할 수 있다

> 3. 레이더 탐색 거리다
>> - 5.10.20,40,80,160마일의 거리로 조절 할 수 있다
>> <img width="552" height="502" alt="스크린샷 2025-12-22 141238" src="https://github.com/user-attachments/assets/f46237be-23c7-4cc8-b462-4915c5aff3d4" />
>> - 예를 들어 80마일로 설정시 레이더 사각형 좌우측 짧은 수평선을 기준으로 0,20,40,60,80마일로 레이더로 스캔된 적의 거리를 알 수 있다

> 4. 레이더 커서다
>> - 레이더에 감지된 기체를 TDC로 레이더 커서를 움직여 표시 위에 두고 TDC Depress키를 누르면 기체를 락온 할 수 있다
>> - 레이더 커서 위 아래로 있는 노란색 숫자는 현재 레이더가 보고 있는 최저고도와 최소고도를 의미하며 해당 사진을 기준으로 -5000피트(이하 0피트)~18000피트 사이를 보고 있다는 뜻이 된다 레이더 커서를 위에서 설명한 탐색거리를 토대로 레이더 발산방식은 원뿔이기에 0마일에 가깝게 가져올수록 더 좁은 범위만 탑색할 수 있게되며 탐색거리의 최대만큼 레이더커서를 올리면 더 넓은 범위를 탐색할 수 있게된다
>> <img width="666" height="26" alt="image" src="https://github.com/user-attachments/assets/acf68e37-2cbf-4ddf-8f1a-dcb6887e7c62" />
>> - 물론 키설정에서 해당 레이더 엘리베이션 키를 할당해 레이더가 탐색할 고도를 조절 할 수 있다

> 5. 레이더에 탐지된 기체 표시다
>> - 해당 표시에 TDC를 통해 마우스를 갖다 대면 락온 할 수 있다
>> <img width="487" height="477" alt="image" src="https://github.com/user-attachments/assets/0aee023d-03eb-4da4-9ac1-18e2de1977fe" />
>> - 레이더 락온된 모습, 락온된 표식 양쪽으로 노란색 글씨로 0.5와 14가 표시되는데 이는 탐지되고 락온된 기체가 마하 0.5에 고도 1만4천피트를 날고 있다는 뜻이다
>> <img width="363" height="80" alt="image" src="https://github.com/user-attachments/assets/076251b9-f3a5-4fff-b932-5f6d1a2ef508" />
>> - 또한 표식 위 모양을 통해 해당 항적의 정보가 어떤지 알 수 있다 ( 출처: 1전비 카페 )

> 6. raw bricks
>> - 완전하게 식별된것이 아닌 레이더가 탐색하면서 "뭔가 여기 있는거 같은데.." 라며 보여주는 표식이다 이는 무조건적으로 기체인것만은 아니며 체프 혹은 탈드 또한 이렇게 표시될 수 있다

> 7. 레이더 좌우 탐색 각도다
>> - 레이더 탐색 각도를 조절 할 수 있다 레이더 탐색각도가 넓으면 더 넓은 범위로 탐색이 가능해지지만 위에 스캔바에서도 설명했듯 너무 넓으면 적을 지속적으로 탐지하는게 힘들어져 레이더에서 적을 놓칠 수 있다

## 사용법

<img width="1792" height="1232" alt="image" src="https://github.com/user-attachments/assets/e2e68a39-7e80-41b6-b4d1-f2b8eb33e9ab" />

> 사전준비에서대로 준비 후 공대공 레이더에 탐색된 항적을 TDC를 통해 레이더 커서를 대고 TDC Depress 키를 눌러 락온하면 HUD에 레이더를 이용한 기총 사격때 처럼 정보가 표시된다

<img width="484" height="551" alt="스크린샷 2025-12-22 145054" src="https://github.com/user-attachments/assets/9e6648fe-d083-4c17-9aaa-3557c2456782" />

> 1. 적의 거리 및 위치를 나타내는 막대기다 적과 가까워 질수록 반시계방향으로 회전한다

> 2. 최대사거리 표시계, 적과의 거리를 나타내는 막대기가 가까워 질수록 반시계방향으로 회전하며 최대사거리 표시계를 지나면 명중가능 거리임을 나타낸다

> 3. 회피불가사거리 표시계, 적과의 거리를 나타내는 막대기가 최대사거리 표시계를 지나 회피불가사거리 표시계를 지나기 시작하면 정말 왠만해서는 적이 회피 할 수 없는 거리임을 나타낸다

> 4. 최소사거리 표시계, 적과의 거리를 나타내는 막대기가 최소사거리 표시계를 지나기 시작하면 너무 가까워 미사일을 발사 할 수 없는 거리를 나타낸다

> 5. 적과의 상대속도 및 거리를 나타낸다

> 6. 적이 사각형으로 위치가 표시되는데 해당 사각형은 Unknown이라는 뜻으로 대상에게 아직 IFF 신호를 보내기전으로 미확인이라는 뜻이다

<img width="583" height="531" alt="스크린샷 2025-12-22 145805" src="https://github.com/user-attachments/assets/7bb2a5cb-882d-4919-a7f7-3765d85e6956" />

> 적을 향해 날아가다보면 HUD에 굵은 점이 생기는데 이는 락온중인 대상이 향하는곳을 미리 알려주는것으로 붉은색 원(최대사거리 표시계, 회피불가사거리 표시계, 최소사거리 표시계가 달려있는 원) 내부에 굵은 점을 넣고 미사일을 쏘면 적의 예상 이동방향으로 쏜것이기에 명중률이 올라간다

<img width="676" height="584" alt="스크린샷 2025-12-22 150052" src="https://github.com/user-attachments/assets/78df95b2-8af2-4e44-a646-ef75babf17c7" />

> 굵은 점을 초록색 원 안에 넣고 적과의 거리를 표시해주는 막대기가 최대사거리표시계 혹은 회피불가사거리 표시계를 넘어서면 스틱의 트리거(기본설정 Space Bar)를 눌러 발사하면 되고 락온이 풀리지 않도록 레이더 화면 내에 적이 유지되도록 비행해주어야한다 락이 잠깐이라도 풀리는 순간 폭약이 담겼을뿐인 막대기가 되어버린다  

<img width="884" height="674" alt="image" src="https://github.com/user-attachments/assets/01404188-b435-4c9b-8aa4-519385838ec3" />
<img width="1584" height="1104" alt="image" src="https://github.com/user-attachments/assets/9f130420-adaf-4d7e-8178-be47400b9838" />
<img width="871" height="796" alt="image" src="https://github.com/user-attachments/assets/17fb63fd-788f-4e4e-9b8d-2f446be1a0cd" />
<img width="1307" height="670" alt="image" src="https://github.com/user-attachments/assets/7ae9149f-fcad-4bc9-ba81-46f9fce8c08b" />
<img width="2079" height="1164" alt="image" src="https://github.com/user-attachments/assets/7e10aa8a-c56c-4f95-b428-9c010adf17e9" />
