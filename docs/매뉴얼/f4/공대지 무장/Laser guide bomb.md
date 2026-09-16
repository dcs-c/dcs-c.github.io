# Laser Guide Bomb

## 개요

F4E 팬텀 또한 자체 포드를 장착 할 수 있어 GBU-10,12,24 같은 레이저 유도 폭탄을 혼자서 던지고 유도 하며 사용할 수 있다 하지만 팬텀에 장착되는 페이브스파이크 포드는 F/A-18C나 F-16C에 달리는 최신형 포드와 달리 해상도도 구리고 열상이 없는 TV 화면이기에 밤에는 사용이 거의 불가 하며 기체의 움직임에 따라 포드가 조준한곳에 머물지 못하고 조금씩 뒤틀리는 경향도 있어 투하 및 레이저 유도시엔 기동이 힘들다는 단점이 있다

## 사용법 With AI

<img width="1274" height="867" alt="image" src="https://github.com/user-attachments/assets/6bae1e90-7aed-4cc5-9492-cebf5a8e296c" />

페이브 스파이크 포드는 4번 파일런에만 장착이 가능하며 기존 버전의 페이브 스파이크 포드와 보다 향상된 버전의 페이브 스파이크 포드 2가지 중 하나를 장착 할 수 있다

<img width="1096" height="777" alt="image" src="https://github.com/user-attachments/assets/c084d1b9-c100-45ae-a840-da867d600930" />
<img width="1151" height="783" alt="image" src="https://github.com/user-attachments/assets/0e076d32-1b78-42cc-85e6-60da884f1da0" />
<img width="1075" height="793" alt="image" src="https://github.com/user-attachments/assets/dceb2366-1106-459b-8555-488896ddbcde" />

팬텀에 장착 가능한 LGB와 파일런은 다음과 같다

GBU-24 : 1,2,8,9

GBU-10 : 1,2,8,9

GBU-12 : 1,2,8,9 [ 2번과 8번 파일런의 경우엔 2개씩 장착 할 수 있으며 스페셜 웨폰 어답터를 사용할 경우 사이드와인더 4개까지 같이 장착이 가능하다 ]

---

<img width="1002" height="1205" alt="11111" src="https://github.com/user-attachments/assets/46a40ac8-abdb-437c-8afd-f1c7f1b616de" />
<img width="1606" height="920" alt="22222" src="https://github.com/user-attachments/assets/21c47423-ca46-4714-b25f-a40404fc106a" />

1. 투하 할 LGB의 파일런을 선택 해준다
2. 마스터 암을 올려준다
3. TGT FIND로 설정해준다
4. 웨폰 셀랙트를 BOMB으로 설정해준다
5. DSCG screen mode를 TV로 돌려준다
6. 퓨즈를 켜준다 ( Nose & Tail )
7. 해당 두 노브를 이용해 DSCG에 송출된 포드 화면이 잘 보이도록 조절한다
8. DSCG에 포드 화면이 잘 송출되고 있는지 확인한다
9. 레티클 노브는 0으로 설정한다
10. HUD MODE를 A/G로 설정한다

---

<img width="654" height="45" alt="image" src="https://github.com/user-attachments/assets/1e66cea9-b927-47f4-bb8a-665983b19477" />
<img width="659" height="25" alt="image" src="https://github.com/user-attachments/assets/aa19c550-b0f9-4851-9195-bed58849c190" />
<img width="1064" height="86" alt="image" src="https://github.com/user-attachments/assets/9907eda2-52c9-42a7-aace-a0d087acc7fa" />

포드 사용하기 앞서 WSO석에 앉아 줄 사람이 없는 경우 다음과 같은 키세팅이 필요하다

---

<img width="868" height="1391" alt="44444" src="https://github.com/user-attachments/assets/14627987-dcbe-4e21-a715-3683657051cc" />

투하 전 R ctrl + B 키를 눌러 밤 테이블을 열어주고 TGT FIND 및 투하 할 폭탄의 종류와 투하 당시 속도 및 고도, 타겟 고도, 다이브 각도등을 작성 후 Tell jester and close를 눌러 밤 테이블을 닫아준다
> 사실 밤테이블을 작성하지 않아도 투하 및 명중 시킬 수 있다

---

<img width="1260" height="1356" alt="image" src="https://github.com/user-attachments/assets/26512e67-4b2e-467e-9048-8563a232d072" />

타겟이 있는 곳에 HUD 레티클을 두게 되면 포드도 얼추 비슷한 곳을 바라보게 된다 

이후 **[wso] antenna hand control trigger Half action** 키를 누르면 **[wso] antenna hand control Slew X,Y** 키로 움직일 수 있게 되며 **[wso] antenna hand control challenge button**을 눌러주면 2단계의 확대 축소도 가능하다, 다시 레티클에 고정 하고 싶으면 다시 한번 **[wso] antenna hand control trigger Half action** 키를 누르면 된다

---

<img width="1939" height="1440" alt="33333" src="https://github.com/user-attachments/assets/5d8ca45a-c3e6-4e15-be11-7cbb2743baff" />

**[wso] antenna hand control trigger Half action** 키를 눌러 포드를 움직이다보면 사진의 빨간색 사각형 안에 파란색 사각형으로 표시된 부분의 짧은 연두색 선이 깜빡거릴것이다 이후 포드로 적을 찾은 후 **[wso] antenna hand control trigger Full action** 키를 눌러주면 위쪽 짧은 선의 깜빡임이 멈추게되는데 이때 레이저가 조사되는 중인것이다 혹여나 위쪽 짧은 연두색 선과 긴 연두색 선이 둘다 동시에 깜빡이는 경우 기체와 타겟과의 거리가 멀어 레이저 조사가 안된다는 뜻이다

---

<img width="1995" height="1440" alt="555555" src="https://github.com/user-attachments/assets/e6af8603-8f5a-48f4-a902-3561a15a4561" />

이후 밤 테이블에 작성한 정보를 토대로 제원을 맞춰서 날아가며 무장 투하 버튼 ( 기본 설정 기준 : R ALT+SPACE BAR ) 키를 누르고 있으면 포드가 포착 하고 있는곳을 기준으로 레티클이 방향을 가르쳐주는데 레티클의 좌우 수평 사각형과 12시에 있는 역삼각형을 맞춰주면 기수를 낮추지 않더라도 포드가 바라보고 있는곳으로 향할 수 있다

방향을 맞춰 날아가다 보면 DSCG에 있던 연두색 작은 선이 연두색 긴 선쪽으로 내려오는데 이 두 선이 만날때 폭탄이 투하된다

---

<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/e0ea6e40-5ba3-45ea-a87b-8c6784f58330" />
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/08fe742e-2729-48d9-8748-331f09719e27" />
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/8114f9c3-19ef-456e-817a-61d10b026d32" />
<img width="2560" height="1440" alt="image" src="https://github.com/user-attachments/assets/959bb621-4246-411a-9fd9-8ec67d9e6c65" />

## 사용법 With Human
