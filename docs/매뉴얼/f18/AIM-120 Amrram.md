# AIM-120 Amrram

## 개요

AIM-120 Amrram은 능동 미사일로 반능동 미사일인 스패로우와 얼추 비슷해보이지만 약간의 차이점을 가지고 있다 스패로우는 적을 타격하기 전까지 락온을 유지해야되지만 AIM-120 Amrram은 적과 미사일이 일정거리로 다가갈때까지만 락온을 유지해주면 이후 일정거리 내에서 핏불(미사일 자체 레이더 시커로 적을 락온)에 들어가면 이후 모기체가 유도를 할 필요가 없다
그렇기에 PVP든 PVE든 사용만 가능하다면 대부분 암람을 장착하여 사용한다

## 사전준비

<img width="1093" height="789" alt="image" src="https://github.com/user-attachments/assets/3dcbffc7-f2fe-4fdb-b9c8-1ba3eaa4eb95" />

> 암람은 2,3,7,8번 파일런에 2개씩 4,6번 파일런에 1개씩 총 10발의 암람이 장착이 가능하다

<img width="1852" height="1264" alt="image" src="https://github.com/user-attachments/assets/ebf23a2e-8401-4d7d-9df6-7dd862944d1d" />

> A/A모드, 마스터암 ON, 암람 선택(L Shift + D)

## MSI 기능 및 사용법

암람 사용법에 앞서 호넷의 주요 기능중 하나인 MSI 기능에 대해서 간단하게 설명한다

기존 레이더로 적을 탐색하는것은 적이 레이더에 탐지 되어야만 락온이 가능했지만 MSI를 사용하면 본인 기체 레이더에 적이 감지되지 않아도 아군 기체 혹은 조기경보기의 고성능 레이더로 탐지된 적을 공대공 레이더 혹은 SA페이지 에서 확인이 가능하며 이를 토대로 락온을 할 수 있다
심지어 호넷이 보내는 레이더를 통해 락온이 된것이 아니기에 적 RWR 상에는 호넷의 ㅎ자도 안보이지만 적은 호넷이 날린 미사일에 맞아 죽는 경우가 허다할것이다

<img width="1792" height="1184" alt="image" src="https://github.com/user-attachments/assets/f42d0feb-3e53-4b83-a0ef-785bf20ed7fd" />

> 현재 호넷 공대공 레이더에는 아무것도 감지되어있지 않은 상태다

<img width="834" height="608" alt="스크린샷 2025-12-22 172035" src="https://github.com/user-attachments/assets/155b8f95-5a13-4bb7-bcf4-5228753b2700" />
<img width="860" height="550" alt="스크린샷 2025-12-22 172041" src="https://github.com/user-attachments/assets/c3a53248-04aa-405e-a46a-e17d58dcaee6" />

> 하지만 여기서 데이터링크(1)를 누르고 ON(2) 그러면 336.0이라는 숫자가 UFC에 뜰것이고 다시 데이터링크(3)를 누르고 ON(4)을 누르면 127이라는 숫자가 뜨는데 총 2개의 데이터링크 시스템을 킨것이다 이러면 데이터링크가 켜진것이다

<img width="490" height="421" alt="image" src="https://github.com/user-attachments/assets/ec154858-016f-4dd9-94fd-2bd33f657dd8" />
<img width="570" height="468" alt="스크린샷 2025-12-22 172327" src="https://github.com/user-attachments/assets/5dba4021-916e-4d13-abe4-999a4c3a6966" />

> 데이터링크를 킨 이후 SA페이지와 공대공 레이더를 보게되면 아군은 동그란 원, 적은 마름모에 빨간색으로 표시되며 각 도형에 달려있는 짧은 막대기는 해당 기체가 향하는 방향이다

<img width="495" height="449" alt="image" src="https://github.com/user-attachments/assets/ea3209b2-8277-476d-8150-16d1fc1c95bb" />

> 이 상태로 공대공 레이더에서 레이더 커서를 이용하여 적 빨간 마름모 위에 커서를 올리면 적 정보가 뜬다(마하0.7에 1만4천피트), 근데 보면 내 레이더는 지금 고도 5만 5천피트에서 4만 7천피트를 보고 있어서 원래라면 락온은 커녕 레이더에 보이지도 않는 상태일태지만

<img width="1938" height="1260" alt="image" src="https://github.com/user-attachments/assets/791701d3-b000-44e1-a0e0-f37fb9308ea3" />

> 그저 레이더커서를 빨간 마름모로 표시된 적 위에 두고 TDC Depress키를 눌렀을 뿐인데 조기경보기가 보내준 적 정보를 토대로 적을 락온한 상태가 된다, 하지만 내 화면에는 적을 내 레이더로 락온한것 처럼 보이지만 조기경보기가 보내준 정보를 토대로 미사일을 발사하는 것이기 때문에 적 RWR에는 아무런 경보가 뜨지 않는다

<img width="866" height="660" alt="image" src="https://github.com/user-attachments/assets/d606ecf2-a9ff-458b-846c-afa41c597c2a" />

> 이후 HUD에 스패로우 사용 때와 똑같이 적 정보 및 사거리 표시계가 뜨게된다 적과의 거리를 나타내는 막대기가 최대사거리표시계 혹은 회피불가사거리 표시계 내에 있을 경우 사격하면 된다, 하지만 적과의 거리를 나타내는 12.4마일 숫자 아래 12ACT라는 숫자가 있는것을 확인 할 수 있는데
이는 암람이 지금 발사되면 몇초 뒤쯤 자체 레이더가 켜지는지 나타내는 숫자이며 0ACT가 되면 이후 숫자+TTG가 표시되는데 이는 자체 유도가 시작되고 적과 명중하기까지 남은 시간을 나타낸다(하지만 절대적인 시간은 아니다 상대가 기수를 틀면 거리 계산이 바뀌어 0TTG가 되었음에도 명중이 안되고 아직도 따라가고있는 중일 가능성이 높다)

<img width="1060" height="759" alt="image" src="https://github.com/user-attachments/assets/eb2db439-d4de-41c7-9df5-3e3ad04d9b01" />
<img width="958" height="776" alt="image" src="https://github.com/user-attachments/assets/5a9e5634-27ba-4316-b1fb-f503fe6ac69d" />
> TTG(핏불)에 들어가게 되면 이후엔 모기체의 유도 따윈 필요 없으니 180도 선회해서 도망가도된다
<img width="1379" height="1029" alt="image" src="https://github.com/user-attachments/assets/6c0e9080-cb2e-4552-a04c-872507b26a98" />
<img width="2256" height="1271" alt="image" src="https://github.com/user-attachments/assets/d58d00d4-1336-4f08-b4ee-be59ef5f7c44" />

## 매드독

암람은 매드독이라는 기능이 있다 말 그대로 미친개라는 뜻으로 적 락온 없이 그냥 암람의 자체 레이더 시커만을 믿고 발사하는 방식이다

<img width="2218" height="1277" alt="image" src="https://github.com/user-attachments/assets/cece13d5-d98e-4a93-9f8d-97cee0c5f8c4" />

> 레이더로 락온되지 않으면 HUD에 커다란 점선 원이 생기는데 이 안에 적을 넣고 사격하면 10마일 이내의 적을 암람이 자체 레이더로 추적해 박살낸다

<img width="1170" height="1028" alt="image" src="https://github.com/user-attachments/assets/824216f0-9ea4-46e5-9923-2d8cdee07c29" />
<img width="545" height="513" alt="image" src="https://github.com/user-attachments/assets/956c7807-284e-417a-9e82-f8997935c01f" />
<img width="1494" height="1086" alt="image" src="https://github.com/user-attachments/assets/31aefc50-237d-46be-9109-145bcdfdbb47" />

하지만 매드독 기능은 아군을 식별하는 기능은 없어 그냥 눈앞에 보이는 가장 가까운놈을 잡아서 타격한다 그렇기에 전방에 아군이 없는 상황에서 사격해야 하며 최대사거리를 표시해주지 않기때문에 10마일 이내의 적이라도 콜드로 빠지거나 아니면 암람이 못 물면 빗나가기 쉽상인지라 정말 레이더 락온을 할 시간도 없이 적이 근접하고 있는 상황에서만 사용할것을 권장한다
