# JDAM

## 개요

앞서 서술한 페이브웨이는 레이저 유도를 통한 움직이는 상대까지도 정밀하게 맞출 수 있는 무장이였지만 타겟팅포드로 적이 식별되지 않으면 레이저 유도가 불가하고 목표물에 명중하기 전까지는 작전공역을 이탈하기 어렵다는 단점이 존재했다 하지만 현재 서술할 **JDAM**, Joint Direct Attack Munition은 폭탄 자체에 GPS 정보를 입력하고 해당 좌표로 알아서 떨어지는 폭탄이다
그렇기에 페이브웨이처럼 지속적으로 유도 할 필요 없이 좌표만 딱 찍어주면 되기에 투하 즉시 작전공역을 이탈 할 수 있는 FIRE AND FORGET이 가능하다

하지만 GPS는 교란이 되기 쉽고 정확도도 낮은 편이라 폭탄 내부에 GPS 뿐만 아닌 INS 관성항법장치도 같이 탑재되어 INS를 기준으로 목표를 향해 날아가다가 GPS 정보를 기반으로 해당 좌표를 때려버린다

물론 적을 포착 후 날아가는게 아닌 좌표를 향해 날아가기때문에 페이브웨이랑은 달리 상대가 지속적으로 움직이고 있거나 움직일 수 있는 목표면 맞추는게 힘들다는 단점이 있다 

하지만 다른 폭탄에 비해 적을 포착할 필요도 없이 좌표만 입력되면 거기로 알아서 날아가기에 투하 고도 또한 높으며 투하 높이가 높은 만큼 더 먼 사정거리를 가졌다

## 사용법

<img width="1062" height="867" alt="image" src="https://github.com/user-attachments/assets/34383ac4-03f3-4c2d-8514-49e482ac1bcd" />

> JDAM은 2,3,7,8번 파일런에 장착이 가능하며 500,1000,2000파운드로 나뉘어 있다, 1000파운드 이하는 한 파일런에 2개씩 달 수 있어 총 8개의 JDAM을 가지고 이륙 할 수 있다
>> 추후 서술 하겠지만 TOO모드로 투하하겠다고 하면 타겟팅포드를 들고 이륙해야한다

<img width="642" height="555" alt="image" src="https://github.com/user-attachments/assets/f2083ced-140d-4890-819f-920f148f8e61" />

> A/G모드, 마스터 암 ON. 스토어 페이지에서 JDAM 선택

<img width="642" height="555" alt="스크린샷 2025-11-28 103412" src="https://github.com/user-attachments/assets/80a63834-53c7-430e-aeba-c5628db7f7fd" />

> 1. 앞서 설명했듯 JDAM은 GPS와 INS를 기반으로 적을 타격하기에 기체 시동걸때 처럼 INS 정렬이 필요하다, 10분부터 시작하지만 남은시간이 7분 30초 즉 2분 30초가 지나면 사용할 수 있다, 전부다 정렬하는것이 아닌 하나의 폭탄이 정렬을 시작하면 다른 파일런의 폭탄듣로 정렬하니 그렇게 오래 걸리진 않으며 그사이에 좌표 정보 입력 이륙, 비행 등 하다보면 금방 지나간다

> 2. 모드 설정이다
>> PP모드 : Pre-Planned, 기계획적 임무 라는 뜻으로 파일럿이 사전에 받은 목표의 좌표를 폭탄 자체 내에 좌표를 손수 입력하여 사용 모드이다

>> TOO모드 : Target of Opportunity, 임기표적 혹은 사전 미설정 타겟 이라는 뜻으로 적의 좌표가 정확하지 않아 입력 후 이륙 보다 표적을 향해 다가가며 타겟팅포드 등으로 적을 식별 후 타겟팅포드를 이용해 JDAM에 좌표를 바로 집어 넣는 모드다

> 3. 전기신관 설정이다, INST로 설정하거나 벙커 및 건물을 타격할때는 DLY를 사용하면된다

> 4. JDAM에 입력되어있는 모든 정보를 지우는 기능으로 만약 피치 못할 사정으로 무장 제티슨 시 적에게 무장 및 위치 정보를 탈취당하지 않기 위해 있는 버튼이다, 한마디로 DCS에서는 쓸일이 없다

## PP모드 사용법

<img width="2407" height="1246" alt="image" src="https://github.com/user-attachments/assets/ac23ee45-65a4-4136-9bf3-41c7da8bac23" />

> 우선 적의 정확한 좌표를 추출한다 

<img width="680" height="512" alt="스크린샷 2025-11-28 104948" src="https://github.com/user-attachments/assets/a706a30e-db0c-4bda-97d4-a247505436cd" />

> 이후 JDAM DSPLY를 누른다

<img width="711" height="507" alt="스크린샷 2025-11-28 105102" src="https://github.com/user-attachments/assets/bcf36155-9e8e-416f-9a21-612962f054d9" />

> JDAM DSPLY에 들어가게 되면 MSN 버튼을 누른다

<img width="524" height="522" alt="스크린샷 2025-11-28 105221" src="https://github.com/user-attachments/assets/750a8998-eab6-4756-9d20-9d553049149d" />
<img width="601" height="380" alt="스크린샷 2025-11-28 105632" src="https://github.com/user-attachments/assets/6584fbcf-d782-46f1-bd35-ca43be332659" />
<img width="611" height="413" alt="스크린샷 2025-11-28 105619" src="https://github.com/user-attachments/assets/2562b9e4-47b9-425f-bbe9-18ba833d562c" />
<img width="699" height="488" alt="스크린샷 2025-11-28 110309" src="https://github.com/user-attachments/assets/814e4256-008e-422d-83e4-43db9b0f0cab" />

> 1. TGT UFC 버튼을 누른다

> 2. 추출한 좌표를 입력하기 위해 해당 POSN 버튼을 눌러준다  

> 3. 이후 LAT와 LON이 표시 될텐데 LAT는 북위(N), LON은 동경(E)을 추출한 좌표의 도분초 상세를 입력해주면된다 
>> LAT를 누른후 N(숫자 2)를 누르고 도분초 상세 N부분 앞자리부터 입력해주면되는데 웨이포인트때와 달리 4자 4자씩 끊어서 입력하는것이 아닌 6자 2자씩 끊어 입력해줘야한다

>> <img width="581" height="381" alt="스크린샷 2025-11-28 110019" src="https://github.com/user-attachments/assets/de6a9da6-c92b-45a2-ae7a-8afecb81a2c4" />

>> <img width="579" height="379" alt="스크린샷 2025-11-28 110030" src="https://github.com/user-attachments/assets/8534345b-ab3e-4386-8e7d-0a5ee5f2d8bf" />

>> <img width="593" height="376" alt="스크린샷 2025-11-28 110044" src="https://github.com/user-attachments/assets/161a622c-4414-429b-877f-f209b97b6059" />

>> <img width="578" height="376" alt="스크린샷 2025-11-28 110106" src="https://github.com/user-attachments/assets/4b246627-8816-467e-95a6-46196767fc51" />

> 4. TGT UFC를 한번 눌러서 취소 후 다시 누른다음 FEET 눌러 고도(5.)를 입력하면된다 

<img width="512" height="491" alt="image" src="https://github.com/user-attachments/assets/eb673c88-a132-4f78-9c71-aa7701e661d9" />

> 고도까지 입력이 끝나면 JDAM 입력 화면에 입력한 좌표가 뜨고 사용 준비가 완료되었다

<img width="1555" height="1242" alt="스크린샷 2025-11-28 110835" src="https://github.com/user-attachments/assets/ffdaf65e-782f-42f8-8db3-da7f8d96d5e9" />

> 1. HUD에 JDAM에 입력한 좌표를 토대로 JDAM의 최대 사거리까지의 남은 시간을 표시 해준다

> 2. JDAM에 입력한 좌표를 토대로 생성된 타겟팅포인트다

> 3. HSI에도 JDAM에 입력돤 좌표를 토대로 위치가 표시되며 조금 다른 점이 있다면 입력한 좌표 주번으로 원이 생기는데 그 원이 최대사거리다 HSI에 표시된 내 기체가 해당 원 안으로 들어가면 HUD에서도 IN RNG(사정거리 내) 큐가 뜬다 
>> 아무리 GPS와 INS를 이용해 날아간다고해도 결국은 추진체가 없는 폭탄이기때문에 고도가 더 높을 수록 그리고 기체가 빠를 수록 JDAM의 사정거리 표시는 더 커진다

>> 원 안에 보면 내 기체 표시와 목표 표시 사이, 원 안에 부채꼴 JDAM

## 개요

앞서 서술한 페이브웨이는 레이저 유도를 통한 움직이는 상대까지도 정밀하게 맞출 수 있는 무장이였지만 타겟팅포드로 적이 식별되지 않으면 레이저 유도가 불가하고 목표물에 명중하기 전까지는 작전공역을 이탈하기 어렵다는 단점이 존재했다 하지만 현재 서술할 **JDAM**, Joint Direct Attack Munition은 폭탄 자체에 GPS 정보를 입력하고 해당 좌표로 알아서 떨어지는 폭탄이다
그렇기에 페이브웨이처럼 지속적으로 유도 할 필요 없이 좌표만 딱 찍어주면 되기에 투하 즉시 작전공역을 이탈 할 수 있는 FIRE AND FORGET이 가능하다

하지만 GPS는 교란이 되기 쉽고 정확도도 낮은 편이라 폭탄 내부에 GPS 뿐만 아닌 INS 관성항법장치도 같이 탑재되어 INS를 기준으로 목표를 향해 날아가다가 GPS 정보를 기반으로 해당 좌표를 때려버린다

물론 적을 포착 후 날아가는게 아닌 좌표를 향해 날아가기때문에 페이브웨이랑은 달리 상대가 지속적으로 움직이고 있거나 움직일 수 있는 목표면 맞추는게 힘들다는 단점이 있다 

하지만 다른 폭탄에 비해 적을 포착할 필요도 없이 좌표만 입력되면 거기로 알아서 날아가기에 투하 고도 또한 높으며 투하 높이가 높은 만큼 더 먼 사정거리를 가졌다

## 사용법

<img width="1062" height="867" alt="image" src="https://github.com/user-attachments/assets/34383ac4-03f3-4c2d-8514-49e482ac1bcd" />

> JDAM은 2,3,7,8번 파일런에 장착이 가능하며 500,1000,2000파운드로 나뉘어 있다, 1000파운드 이하는 한 파일런에 2개씩 달 수 있어 총 8개의 JDAM을 가지고 이륙 할 수 있다
>> 추후 서술 하겠지만 타겟팅 포드를 장착하고 이륙하는게 좋다 페이브 웨이처럼 필수는 아니지만 없으면 매우 불편할것이다..

<img width="642" height="555" alt="image" src="https://github.com/user-attachments/assets/f2083ced-140d-4890-819f-920f148f8e61" />

> A/G모드, 마스터 암 ON. 스토어 페이지에서 JDAM 선택

<img width="642" height="555" alt="스크린샷 2025-11-28 103412" src="https://github.com/user-attachments/assets/80a63834-53c7-430e-aeba-c5628db7f7fd" />

> 1. 앞서 설명했듯 JDAM은 GPS와 INS를 기반으로 적을 타격하기에 기체 시동걸때 처럼 INS 정렬이 필요하다, 10분부터 시작하지만 남은시간이 7분 30초 즉 2분 30초가 지나면 사용할 수 있다, 전부다 정렬하는것이 아닌 하나의 폭탄이 정렬을 시작하면 다른 파일런의 폭탄듣로 정렬하니 그렇게 오래 걸리진 않으며 그사이에 좌표 정보 입력 이륙, 비행 등 하다보면 금방 지나간다

> 2. 모드 설정이다
>> PP모드 : Pre-Planned, 기계획적 임무 라는 뜻으로 파일럿이 사전에 받은 목표의 좌표를 폭탄 자체 내에 좌표를 손수 입력하여 사용 모드이다

>> TOO모드 : Target of Opportunity, 임기표적 혹은 사전 미설정 타겟 이라는 뜻으로 적의 좌표가 정확하지 않아 입력 후 이륙 보다 표적을 향해 다가가며 타겟팅포드 등으로 적을 식별 후 타겟팅포드를 이용해 JDAM에 좌표를 바로 집어 넣는 모드다

> 3. 전기신관 설정이다, INST로 설정하거나 벙커 및 건물을 타격할때는 DLY를 사용하면된다

> 4. JDAM에 입력되어있는 모든 정보를 지우는 기능으로 만약 피치 못할 사정으로 무장 제티슨 시 적에게 무장 및 위치 정보를 탈취당하지 않기 위해 있는 버튼이다, 한마디로 DCS에서는 쓸일이 없다

## PP모드 사용법

<img width="2407" height="1246" alt="image" src="https://github.com/user-attachments/assets/ac23ee45-65a4-4136-9bf3-41c7da8bac23" />

> 우선 적의 정확한 좌표를 추출한다 

<img width="680" height="512" alt="스크린샷 2025-11-28 104948" src="https://github.com/user-attachments/assets/a706a30e-db0c-4bda-97d4-a247505436cd" />

> 이후 JDAM DSPLY를 누른다

<img width="711" height="507" alt="스크린샷 2025-11-28 105102" src="https://github.com/user-attachments/assets/bcf36155-9e8e-416f-9a21-612962f054d9" />

> JDAM DSPLY에 들어가게 되면 MSN 버튼을 누른다

<img width="524" height="522" alt="스크린샷 2025-11-28 105221" src="https://github.com/user-attachments/assets/750a8998-eab6-4756-9d20-9d553049149d" />
<img width="601" height="380" alt="스크린샷 2025-11-28 105632" src="https://github.com/user-attachments/assets/6584fbcf-d782-46f1-bd35-ca43be332659" />
<img width="611" height="413" alt="스크린샷 2025-11-28 105619" src="https://github.com/user-attachments/assets/2562b9e4-47b9-425f-bbe9-18ba833d562c" />
<img width="699" height="488" alt="스크린샷 2025-11-28 110309" src="https://github.com/user-attachments/assets/814e4256-008e-422d-83e4-43db9b0f0cab" />

> 1. TGT UFC 버튼을 누른다

> 2. 추출한 좌표를 입력하기 위해 해당 POSN 버튼을 눌러준다  

> 3. 이후 LAT와 LON이 표시 될텐데 LAT는 북위(N), LON은 동경(E)을 추출한 좌표의 도분초 상세를 입력해주면된다 
>> LAT를 누른후 N(숫자 2)를 누르고 도분초 상세 N부분 앞자리부터 입력해주면되는데 웨이포인트때와 달리 4자 4자씩 끊어서 입력하는것이 아닌 6자 2자씩 끊어 입력해줘야한다

>> <img width="581" height="381" alt="스크린샷 2025-11-28 110019" src="https://github.com/user-attachments/assets/de6a9da6-c92b-45a2-ae7a-8afecb81a2c4" />

>> <img width="579" height="379" alt="스크린샷 2025-11-28 110030" src="https://github.com/user-attachments/assets/8534345b-ab3e-4386-8e7d-0a5ee5f2d8bf" />

>> <img width="593" height="376" alt="스크린샷 2025-11-28 110044" src="https://github.com/user-attachments/assets/161a622c-4414-429b-877f-f209b97b6059" />

>> <img width="578" height="376" alt="스크린샷 2025-11-28 110106" src="https://github.com/user-attachments/assets/4b246627-8816-467e-95a6-46196767fc51" />

> 4. TGT UFC를 한번 눌러서 취소 후 다시 누른다음 FEET 눌러 고도(5.)를 입력하면된다 

<img width="512" height="491" alt="image" src="https://github.com/user-attachments/assets/eb673c88-a132-4f78-9c71-aa7701e661d9" />

> 고도까지 입력이 끝나면 JDAM 입력 화면에 입력한 좌표가 뜨고 사용 준비가 완료되었다

<img width="1555" height="1242" alt="스크린샷 2025-11-28 110835" src="https://github.com/user-attachments/assets/ffdaf65e-782f-42f8-8db3-da7f8d96d5e9" />

> 1. HUD에 JDAM에 입력한 좌표를 토대로 JDAM의 최대 사거리까지의 남은 시간을 표시 해준다

> 2. JDAM에 입력한 좌표를 토대로 생성된 타겟팅포인트다

> 3. HSI에도 JDAM에 입력돤 좌표를 토대로 위치가 표시되며 조금 다른 점이 있다면 입력한 좌표 주번으로 원이 생기는데 그 원이 최대사거리다 HSI에 표시된 내 기체가 해당 원 안으로 들어가면 HUD에서도 IN ZONE(사정거리 내) 큐가 뜬다 
>> 아무리 GPS와 INS를 이용해 날아간다고해도 결국은 추진체가 없는 폭탄이기때문에 고도가 더 높을 수록 그리고 기체가 빠를 수록 JDAM의 사정거리 표시는 더 커진다

>> 원 안에 보면 내 기체 표시와 목표 표시 사이, 원 안에 부채꼴 있는데 저 부채꼴 안에서 투하해야 JDAM이 기체의 운동에너지 및 위치에너지를 통해 목표를 맞출 수 있게된다 그리고 그 부채꼴 안에 점선이 하나 있는데 이는 최적의 투하경로다 레이저유도 폭탄이나 무유도 폭탄 처럼 정확하게 목표와 일직선으로 갈 필요 없다 그냥 목표물 근처를 지나간다는 느낌으로 비행해서 투하해도 맞는다 

<img width="1137" height="1255" alt="image" src="https://github.com/user-attachments/assets/3217800e-2e85-411a-82d8-ce36931f4bb6" />
<img width="2559" height="1311" alt="스크린샷 2025-11-28 112035" src="https://github.com/user-attachments/assets/35e038ac-894c-4edd-86c9-571ca650ba09" />
<img width="2552" height="1315" alt="스크린샷 2025-11-28 112111" src="https://github.com/user-attachments/assets/c877f373-3446-4762-a860-6ce5270a118a" />
<img width="2559" height="1308" alt="스크린샷 2025-11-28 112122" src="https://github.com/user-attachments/assets/6f72957f-b355-40db-9ccf-ce594d2f852e" />
<img width="2559" height="1314" alt="스크린샷 2025-11-28 112131" src="https://github.com/user-attachments/assets/f78ebd2e-9977-45c7-a9f9-5e9b23935634" />

## TOO모드 사용법

PP모드에서는 적의 좌표를 정확하게 알아야 했으며 폭탄 하나 하나 좌표를 입력하는 과정이 생각보다 귀찮았을것이다 모든 파일런에 달았다면 총 8개를 입력해야되니 더 그럴것이다

하지만 TOO모드는 페이브웨이에서 썻던 방법 처럼 폭탄에 손수 하나 하나 입력하는것이 아닌 타겟팅포드로 적을 찾아 좌표를 추출하면 현재 선택되어있는 파일런의 JDAM에 무려 자동으로 좌표가 입력된다!

그래서 JDAM은 보통 PP모드보다 TOO모드를 주로 사용하는 편이다

<img width="629" height="516" alt="image" src="https://github.com/user-attachments/assets/535e2576-35d1-426d-a09a-67704ce4c360" />

> A/G모드, FLIR 스위치 ON, 마스터 암 ON, 스토어 페이지에서 JDAM 선택 후 INS 정렬 및 TOO 모드로 변경, 전기신관 INST 설정

<img width="437" height="422" alt="image" src="https://github.com/user-attachments/assets/78d59a00-fc92-4bcc-8281-dd8183386623" />
<img width="448" height="448" alt="image" src="https://github.com/user-attachments/assets/e87249e2-c507-434c-82d6-fa3d2e4362ca" />
<img width="440" height="427" alt="image" src="https://github.com/user-attachments/assets/62989a6d-fcf9-4a40-bd3a-0fc425833463" />

? 웨이포인트로 대략적인 상대 위치를 타겟팅포인트로 생성후 타겟팅포드 화면으로 전환, SOI 후 한번더 우측으로 SOI 시켜 조준자 변경 후 타격 대상을 찾는다

<img width="1575" height="1230" alt="image" src="https://github.com/user-attachments/assets/d150ff58-01ab-451b-b910-dfe42d71f885" />

> 찾은 이후 TDC Depress를 눌러주면 현재 선택되어있는 JDAM에 좌표가 입력된다
>> 물론 타겟팅포드로 적을 찾는것이기에 현재 기체의 고도가 높다면 구름으로 인해 시야가 보이지 않을 수도 있으니 기체를 구름 아래 고도로 낮추거나 틈틈히 있는 구름 사이로 적을 찾아 빠르게 TDC Depress를 눌러 좌표를 추출한다

<img width="1526" height="1282" alt="image" src="https://github.com/user-attachments/assets/4e17aaca-26b9-4dd8-8be8-0a298764f93c" />

> HUD에 타이머가 0이 되고 IN ZONE 큐가 뜨면 투하해주면 된다

<img width="2559" height="1307" alt="image" src="https://github.com/user-attachments/assets/1d330ace-70cf-4051-a803-5e2c4c250627" />
<img width="2559" height="1311" alt="스크린샷 2025-11-28 112035" src="https://github.com/user-attachments/assets/980e9aa6-7a6c-403e-89de-f9258e764e8b" />
<img width="2552" height="1315" alt="스크린샷 2025-11-28 112111" src="https://github.com/user-attachments/assets/33f537ae-9127-436a-96f5-075c90d663db" />
<img width="2559" height="1314" alt="스크린샷 2025-11-28 112131" src="https://github.com/user-attachments/assets/33219edb-c9dc-49fb-8fec-189edc741940" />

이 처럼 JDAM은 TOO모드로 사용시 다른 그 어떠한 폭탄보다 간결하게 사용이 가능하다
