# DCS RUNTIME ERROR 대처법


뭔가 그런 날들이 있지 않은가?
스킬 몆몆개로 적들을 초고열 용광로에 밀어넣는 미소녀가 나오는 씹뜨억겜 말고
방구석에서 메뉴얼을 읽으며 브라보 해병대 고잉닼 예아 를 외치고 싶은 날들이?

필자 또한 그러한 날이 있었다. 그래서 어서 즐기고픈 마음을 가지고 드슥을 켰는데

![](https://media.discordapp.net/attachments/1316387977106296912/1466055924144930907/02E62793-577E-4D8B-BE15-C10F3D9D313D.png?ex=697b5a7a&is=697a08fa&hm=804f1a21d2db3c5f605ba3636def979b242579ab466b21f257994b32ccf1983f&=&format=webp&quality=lossless&width=1522&height=856)
**?**

아니 시발

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSiEyE9WJNrR3-K7jnqELfhOmvooKoj6Ymw&s)

이런 사유로 인해 이번 글을 적게 되었다.

그럼 이제 우리 같이 하체 장애인 -그새끼-의 계략에서 벗어날 해결책을 함께 해보자.

## 윈도우 업데이트 후 검은화면 문제


사용자 폴더에 있는 DCS 폴더의 이름을 **Temp** 로 변경한 후
DCS 게임을 다시 켜보자

경로:
**C:\Users\User Name\Saved Games..**

api-ms-win-crt-runtime-l1-1-0.dll 누락으로 인해 DCS World를 실행할 수 없을꺼다.(아마도)

이 문제는 *Visual Studio 2015용 Visual C++* 재배포 패키지의 일부인
KB2999226 (Universal CRT) 가 설치 하다가 실패해서 그렇다. (설치실패)

해결 방법
Windows 업데이트 설치

시작 → 제어판 → Windows Update로 이동

업데이트 확인

사용 가능한 모든 업데이트 설치

업데이트 설치가 완료되면 컴퓨터를 재시작

재시작 후, 더 이상 업데이트가 없을 때까지 위 단계를 다시 두환 반복

Visual C++ Redistributable 2017 설치

DCS 설치 폴더에 있는 다음 파일 실행:

(DCS_INSTALL_DIR)/distr/vc_redist.x64.exe

Microsoft 웹사이트에 있는 동일한 파일:

Visual C++ Redistributable for Visual Studio 2017 (64-bit)

출처: (https://www.digitalcombatsimulator.com/en/support/faq/startup/)


## 위 사항이 해결이 안됐을 경우

MSVCR120.dll 또는 VCRUNTIME140.dll이 없을 경우엔

설치된 DCS 안에서 Visual Studio 2013용 Visual C++ 재배포 패키지를 찾을 수 있음

경로:

**DCS World\distr\vcredist_x64.exe**


또한 Microsoft 웹사이트에서 다운로드할 수도 있으니 걱정 ㄴㄴ


(https://support.microsoft.com/en-us/help/3179560/update-for-visual-c-2013-and-visual-c-redistributab
...)

**아직도 Windows 7을 사용 중이라면** Service Pack 1이 반드시 설치되어 있어야 됨.

VCRUNTIME140.dll의 경우:

다음 링크에서 Microsoft Visual C++ 재배포 패키지 (x64) 를 다운로드하여 다시 설치하셈

(https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170)


혹시 출시한 모듈에도 성이 안차서 모드 모듈을 사용하였나? 

혹시 그 모듈이 이 현상의 주요 원인으로 의심된다?

다음 경로에서 모든 비공식 모드(unofficial mods)를 삭제하셈

C:\Users<User Name>\Saved Games\DCS\Mods\


그 다음 Cleanup 및 Repair를 실행하면됨

(FAQ 페이지 참고) 


## DCS World (1.5.x, 2.5.x)가 시작 시 멈춥니다

또는

검은 화면이 나타난 후 파악 꼬라박습니다 ( 충돌 )

ㄴ님 그래픽 카드 DirectX 11을 지원함? 안해? 에반데; 

ㄴ이런 경우엔 다이렉트 11 지원하는 글카로 바꿔야됨.(DCS 최소사양)

## dcs.log에 DXGI_ERROR_DEVICE_REMOVED 오류가 기록되며 게임이 충돌하는 경우

대부분의 경우 이는 그래픽 카드 또는 그래픽 드라이버와 관련된 하드웨어 문제

이 오류에 대한 많은 힌트와 해결 방법은 인터넷에서 찾을 수 있으며,
다음 키워드로 검색하면됨:
DXGI_ERROR_DEVICE_REMOVED

온라인에서 레지스트리 편집 관련 팁을 찾을 수는 있지만,
대부분의 경우 DCS 플레이와 관련해서는 도움은 안됨 ㅇㅇ...

다음 조치를 시도해보셈 

DCS 그래픽 설정을 낮추어 중간(Medium) 또는 낮음(Low) 으로 설정한 후 게임 플레이를 확인

다중모니터 설정을 사용 중이라면 눈깔 수를 줄여야 할 수도 있음
(다중모니터 설정을 모니터 1개로만 주사할수 있도록 설정 변경을 요구함.)

그래픽 드라이버 설정에 대해 공장 초기화(Factory reset) 를 수행 하는것이 중요함.
(모든 사용자 설정과 프로필을 기본값으로 복원, 쉽게 말하자면 트럭에 치여서 리제로부터 시작하는 글카생활 하는거임)

## 오버클럭 관련 문제

대부분의 경우 이 문제는 그래픽 카드 오버클럭으로 인해 발생함
(때로는 공장 오버클럭도 포함됨.)

밑에거 함 시도해보셈:
(언더볼팅 관련 이야기 같은데 만약 9070XT 쓴다? 뒤져야지 그럼ㅋㅋ)

MSI Afterburner 소프트웨어를 사용하여 그래픽 카드의 오버클럭 수치를 낮추기
(https://us.msi.com/page/afterburner)

일부 사용자들은 Zotac의 FireStorm과 같은 제조사 유틸리티에서 제공하는
공장 오버클럭으로도 문제를 겪은적이 있음

Nvidia 제어판에서 디버깅 모드(Debugging mode) 를 활성화

Nvidia 제어판의
“미리 보기로 이미지 설정 조정(Adjust image settings with preview)”에서
설정을
“고급 3D 이미지 설정 사용(use the advanced 3D image settings)” →
“3D 응용 프로그램이 결정하도록 설정(let the 3D application decide)” 으로 변경

## 전원 공급 장치(PSU) 점검

전원 공급 장치(PSU)와 콘센트 상태를 확인하는 것이 매우 중요한데, 콘센트랑 선만 잘 꼽혀있담 이건 별 문제 없을꺼임

PSU는 그래픽 카드 설명에 명시된 요구 전력보다 더 높은 출력 용량을 가져야 함.
이는 개발사 공식 웹사이트에 표시된 수치라 하더라도 마찬가지임. 항상 여유를 가지고 살자고 ㅇㅇ

시간이 지남에 따라 PSU는 제조사가 명시한 출력보다
더 낮은 전력을 공급하는 경우가 많습니다.
ㄴ발기부전 걸린거임. 더 자세한 정보는 주변에 있는 컴퓨터 잘 아는 친구나 여기 서버에 상주하고 있는 이동식 컴퓨존들에게 물어보셈

가능하다면 더 강력한 PSU를 사용하여 DCS 동작을 반드시 확인하십시오.

## 추가 하드웨어 점검 방법

메인보드의 다른 PCI-E 슬롯으로 그래픽 카드를 옮겨 장착해 보면
문제 진단에 도움이 될 **수** 있음.

BIOS에 Above 4G Decoding이라는 옵션이 있으며,
(없을 가능성도 있으니 유의)

이를 활성화하여 문제를 해결할 수 있는 경우 **도** 있음

(https://biosgid.ru/parametry-bios-setup/parametry-chipseta/above-4g-decoding.html)

BIOS 업데이트 역시 일부 경우에는 영향을 줄 수 있음.

가능하다면 다른 그래픽 카드로 교체하여 테스트해 보는 것도
문제를 진단하는 데 도움됨 

다른 해결 방법을 찾았다면,
너도 여기에 글 써서 전세계 비붕이들에게 도움좀 줘라 :
(http://www.digitalcombatsimulator.com/en/support/)

출처: DCS 공식 퓌럼 (https://www.digitalcombatsimulator.com/en/support/faq/startup/)

## 약간 극단적인 방법

## 1. DCS가 설치되어있는 SSD 자체를 포맷시킨다.

   1-1. ![](https://media.discordapp.net/attachments/1287774742756982805/1466185737585164339/7579A8E8-8861-4DBA-851D-B1BFEE29D762.png?ex=697bd360&is=697a81e0&hm=c07a945e341867158034ff22b83ff0190fc5d4fc259ae9600a82eb65bb7c99eb&=&format=webp&quality=lossless)

   해당 이미지에서 보이듯 DCS가 설치되어있는 SSD를 우클릭한다.

   1-2. ![](https://media.discordapp.net/attachments/1287774742756982805/1466185738222833735/B4858C9C-3A4C-4F2C-AF9B-3C003020B03D.png?ex=697bd360&is=697a81e0&hm=54c969825694658f05dc306db4b0231e766a368a1bf5813f4af4a682e6514736&=&format=webp&quality=lossless)

   우클릭 하면 이런 화면이 뜨게 되는데, 이중 *포맷...* 이라 적힌 칸을 누른다.

   1-3. ![](https://media.discordapp.net/attachments/1287774742756982805/1466185736754561259/82D605C8-4701-4F52-A301-4BC2F076B26D.png?ex=697bd360&is=697a81e0&hm=d2b01682951135a3a0a9943088071ffc4d8881620bebb6ded6dacb4d381c0222&=&format=webp&quality=lossless)
   
     이중 파일 시스템이나 할당 단위의 크키같은건 어려우니 집어치우고, 그저 조신하게 시작만 누르면 된다.


   만약 설명대로 했다면 모든것이 허무로 돌아간 자신의 SSD를 볼수 있을텐데, 그동한 함께 했던 기억은 싹 잊고 새출발 하면 된다.

   1-4.

   만약 좀더 확실한 방법으로 하고싶다면 C:\Users\username\Saved Games\DCS를 찾아서 DCS 파일을 날려버리자. 
   
   그러면 그동안 묵혀왔던 캐쉬들이 깡그리 날아가며 당신의 컴퓨터에 DCS란 악령은 더이상 남아있지 않게 된다.


## 2. 윈도우 포맷

 보통 이때즈음 오면 드슥만 문제가 아니고 다른곳도 연달아 문제가 터져 윈도우를 포맷하는 과정임이 분명하다.

   그런 당신에게 *어쩌다 이지경까지?* 도전과제를 건네며, 윈도우 포맷 방법 설명을 시작할까 한다.


## 2-1. 중요한 파일 백업

포맷하면 C드라이브 데이터 전부 삭제됨. 그러니 제발 
## 두번 세번은 생각하고 윈도우 포맷을 하자.

백업 대상 예시:

바탕화면

문서 / 다운로드 / 사진 / 동영상

게임 세이브 (문서 폴더 안에 있는 경우 많음)

즐겨찾기, 메모, 인증서는 외장하드 / USB / 다른 PC / 클라우드 중 하나에 복사하여 백업하는것이 심신의 안정에 도움됨.

## 2-2. 윈도우 제품키 확인

설정 → 시스템 → 정보 → 제품 키 및 활성화에 가면 내가 지금까지 윈도우를 그냥 썼는지 아님 돈내고 썼는지 인증 여부가 보임. 

제품 키 번호가 보인다면 혹시 모르니 쟁여놓자.

## 2-3. USB 준비 및 윈도우 파일 설치

8GB 이상 USB 1개

안에 있는 파일 전부 없애야 향후에 탈이 안남.

윈도우 10: (https://www.microsoft.com/software-download/windows10)

윈도우 11: (https://www.microsoft.com/software-download/windows11)

 “미디어 생성 도구” 다운로드하고

Media Creation Tool 다운로드하고

관리자 권한으로 실행

도구 실행 설정가서 약관 동의하고

다른 PC용 설치 미디어 만들기 선택

언어는 한국어

에디션: Windows 10 / 11

아키텍처: 64비트

USB 플래시 드라이브 선택

USB 선택 → 자동으로 부팅 USB 생성

여기서 10~20분 소요되는데, 혹시 모를 실패를 미리 생각하고 마음속 평정심을 찾아보자.


만약 지금까지의 과정을 잘 따라왔다면

BIOS 진입해서 USB로 부팅하기

1. PC 완전히 끄기
2. 
3. 전원 켜자마자 키 연타

메인보드별 BIOS 키:

제조사	키

ASUS	DEL / F2

MSI / DEL

GIGABYTE / DEL

ASRock / DEL

노트북	F2 / F10 / F12


전원 버튼 누르고 바로 연타하면 됨

## 2-4. 부팅 순서 변경 (Boot Priority)

Boot 메뉴로 이동

USB를 1순위로 설정

저장 후 종료 (보통 F10 → Yes)

## 2-5. 윈도우 설치 시작
   
USB로 부팅되면 자동으로 설치 화면 나옴 ㅇㅇ

언어 설정

언어: 한국어

시간/통화: 한국

키보드: 한국어

그다음 “지금 설치” 클릭

아까 복사 해두었던 제품 키 입력

## 있으면 입력 

( 없으면 우측 하단에 돈내라고 도촉장 보일꺼임 )

 사용할 에디션 선택

그냥 기존에 쓰던 버전 선택 ㅇㅇ

(홈 / 프로 / 에듀케이션 등)

설치 유형 선택

## 중요

**사용자 지정: Windows만 설치(고급)**

 업그레이드 선택하면 안 됨.

 # 2-6. 파티션 삭제 & 디스크 설정 (가장 중요)

여기서 실수 제일 많이 하니까 여유를 가지고 천천히 보셈

디스크/파티션 화면 예시

>드라이브 0 파티션 1
>드라이브 0 파티션 2
>드라이브 0 파티션 3

클린 포맷 방법을 보통 권장함

드라이브 0에 있는 파티션 전부

하나씩 선택 → 삭제

전부 삭제되면 모든건 없어지고 할당되지 않은 공간 하나만 남음. 존나 허무함 

그 상태에서 다음

윈도우가 자동으로 파티션 생성을 하게 되는데 

만약 다른 디스크(드라이브 1 등)가 있으면 건드리지 말 것

## 2-7. 윈도우 설치 진행

이때 부턴 그냥 손 때도 됨. 자동으로 파일 복사 하면서 

여러 번 재부팅도 하고 지혼자 북치고 장구치로 지랄이란 지랄은 다함 ㅇㅇ

USB는 첫 재부팅 후 빼도 됨

10~30분 소요

## 2-8.초기 설정 (OOBE)

1. 너 어디살아: 대한민국
   
2. 너 무슨말 할꺼야: 한국어

3. 네트워크 연결: 하셈
   

가능하면 인터넷 연결 권장

계정은 마이크로소프트 계정 또는 오프라인 계정 선택 가능한데, 오프라인은 비추임

개인정보 설정은 원하면 전부 끄고 진행 가능( 모르면 그냥 가만히 냅둬 )

포맷 후 꼭 해야 할 것들
1. 윈도우 업데이트
설정 → Windows 업데이트 → 업데이트 확인


※ 드라이버도 같이 설치됨

2. 그래픽 드라이버 설치 (중요)

NVIDIA / AMD 공식 사이트에서 최신 설치

## 2-9. 필수 프로그램 설치

Chrome / Edge( 누가 엣지 씀? 그냥 크롬써 )

압축 프로그램 (7zip)

**게임 런처 (Steam 등)**

백업한 파일 복구는 문서, 사진, 세이브 파일 다시 복사 하면 끝임.


근데 이게 다 귀찮아?

## 넌 그냥 하지 마라
