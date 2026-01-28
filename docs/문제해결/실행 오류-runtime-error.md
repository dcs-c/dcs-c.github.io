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

# 윈도우 업데이트 후 검은화면 문제


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

출처: https://www.digitalcombatsimulator.com/en/support/faq/startup/


# 위 사항이 해결이 안됐을 경우

MSVCR120.dll 또는 VCRUNTIME140.dll이 없을 경우엔

설치된 DCS 안에서 Visual Studio 2013용 Visual C++ 재배포 패키지를 찾을 수 있음

경로:

**DCS World\distr\vcredist_x64.exe**


또한 Microsoft 웹사이트에서 다운로드할 수도 있으니 걱정 ㄴㄴ


https://support.microsoft.com/en-us/help/3179560/update-for-visual-c-2013-and-visual-c-redistributab
...

**아직도 Windows 7을 사용 중이라면** Service Pack 1이 반드시 설치되어 있어야 됨.

VCRUNTIME140.dll의 경우:

다음 링크에서 Microsoft Visual C++ 재배포 패키지 (x64) 를 다운로드하여 다시 설치하셈

https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170


혹시 출시한 모듈에도 성이 안차서 모드 모듈을 사용하였나? 

혹시 그 모듈이 이 현상의 주요 원인으로 의심된다?

다음 경로에서 모든 비공식 모드(unofficial mods)를 삭제하셈

C:\Users<User Name>\Saved Games\DCS\Mods\


그 다음 Cleanup 및 Repair를 실행하면됨

(FAQ 페이지 참고) 


# DCS World (1.5.x, 2.5.x)가 시작 시 멈춥니다

또는

검은 화면이 나타난 후 파악 꼬라박습니다 ( 충돌 )

ㄴ님 그래픽 카드 DirectX 11을 지원함? 안해? 에반데; 

ㄴ이런 경우엔 다이렉트 11 지원하는 글카로 바꿔야됨.(DCS 최소사양)

# dcs.log에 DXGI_ERROR_DEVICE_REMOVED 오류가 기록되며 게임이 충돌하는 경우

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

# 오버클럭 관련 문제

대부분의 경우 이 문제는 그래픽 카드 오버클럭으로 인해 발생함
(때로는 공장 오버클럭도 포함됨.)

밑에거 함 시도해보셈:
(언더볼팅 관련 이야기 같은데 만약 9070XT 쓴다? 뒤져야지 그럼ㅋㅋ)

MSI Afterburner 소프트웨어를 사용하여 그래픽 카드의 오버클럭 수치를 낮추기
https://us.msi.com/page/afterburner

일부 사용자들은 Zotac의 FireStorm과 같은 제조사 유틸리티에서 제공하는
공장 오버클럭으로도 문제를 겪은적이 있음

Nvidia 제어판에서 디버깅 모드(Debugging mode) 를 활성화

Nvidia 제어판의
“미리 보기로 이미지 설정 조정(Adjust image settings with preview)”에서
설정을
“고급 3D 이미지 설정 사용(use the advanced 3D image settings)” →
“3D 응용 프로그램이 결정하도록 설정(let the 3D application decide)” 으로 변경

# 전원 공급 장치(PSU) 점검

전원 공급 장치(PSU)와 콘센트 상태를 확인하는 것이 매우 중요합니다.

ㄴ콘센트랑 선만 잘 꼽혀있담 이건 별 문제 없을꺼임

PSU는 그래픽 카드 설명에 명시된 요구 전력보다 더 높은 출력 용량을 가져야 함.
이는 개발사 공식 웹사이트에 표시된 수치라 하더라도 마찬가지임. 항상 여유를 가지고 살자고 ㅇㅇ

시간이 지남에 따라 PSU는 제조사가 명시한 출력보다
더 낮은 전력을 공급하는 경우가 많습니다.
ㄴ발기부전 걸린거임. 더 자세한 정보는 주변에 있는 컴퓨터 잘 아는 친구나 여기 서버에 상주하고 있는 이동식 컴퓨존들에게 물어보셈

가능하다면 더 강력한 PSU를 사용하여 DCS 동작을 반드시 확인하십시오.

# 추가 하드웨어 점검 방법

메인보드의 다른 PCI-E 슬롯으로 그래픽 카드를 옮겨 장착해 보면
문제 진단에 도움이 될 **수** 있음.

BIOS에 Above 4G Decoding이라는 옵션이 있으며,
(없을 가능성도 있으니 유의)

이를 활성화하여 문제를 해결할 수 있는 경우 **도** 있음

https://biosgid.ru/parametry-bios-setup/parametry-chipseta/above-4g-decoding.html

BIOS 업데이트 역시 일부 경우에는 영향을 줄 수 있음.

가능하다면 다른 그래픽 카드로 교체하여 테스트해 보는 것도
문제를 진단하는 데 도움됨 

다른 해결 방법을 찾았다면,
너도 여기에 글 써서 전세계 비붕이들에게 도움좀 줘라 :
http://www.digitalcombatsimulator.com/en/support/

출처: DCS 공식 퓌럼 https://www.digitalcombatsimulator.com/en/support/faq/startup/


다 귀찮다?


# 지웠다가 다시 깔아
