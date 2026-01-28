
예아 반갑노. 신바람 노박사다 익이
오늘따라 명방 엔드필드가 아닌 DCS를 하고싶어 게임을 켰는데

![](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgIdOBpLiB0vjFMQgktShQQEpRCoWvdMTGg&s)

**?**



화면이 하얗게 질러버리다 못해 어둑해진것이 꼭 2009년 5월 22일날 꿨던 꿈 같노...
그렇기에 오늘은 이 문제를 해결할수 있는 몆가지 해결책을 제시 해볼까 합니노.

**야 기분좋다!!** 를 한번 외치고 시작 해보자 익이.

# 윈도우 업데이트 후 검은화면 문제
만약 이 문제가 발생하기 전에는 게임을 실행할 수 있었다면, **이제 고칠 시간이다.**
다음 진행과정을 한번 수행해보자

사용자 폴더에 있는 DCS 폴더의 이름을 **Temp** 로 변경한 후
DCS 게임을 다시 켜보셈

경로:
**C:\Users\User Name\Saved Games..**

api-ms-win-crt-runtime-l1-1-0.dll 누락으로 인해 DCS World를 실행할 수 없을꺼다.(아마도)

이 문제는 *Visual Studio 2015용 Visual C++* 재배포 패키지의 일부인
KB2999226 (Universal CRT) 가 설치 하다가 부엉이 바위에서 뛰어내려서 그렇다. (설치실패)

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
위 사항이 해결이 안됐을 경우

MSVCR120.dll 또는 VCRUNTIME140.dll이 컴퓨터에 없습니다
MSVCR120.dll의 경우:

설치된 DCS 안에서 Visual Studio 2013용 Visual C++ 재배포 패키지를 찾을 수 있습니다.

경로:

DCS World\distr\vcredist_x64.exe


또한 Microsoft 웹사이트에서 다운로드할 수도 있습니다.
https://support.microsoft.com/en-us/help/3179560/update-for-visual-c-2013-and-visual-c-redistributab
...

아직도 Windows 7을 사용 중이라면 Service Pack 1이 반드시 설치되어 있어야 합니다.

VCRUNTIME140.dll의 경우:

다음 링크에서 Microsoft Visual C++ 재배포 패키지 (x64) 를 다운로드하여 다시 설치하십시오.

https://docs.microsoft.com/en-us/cpp/windows/latest-supported-vc-redist?view=msvc-170
Update for Visual C++ 2013 and Visual C++ Redistributable Package -...
Fixes a problem in which a program that you build by using Microsoft Visual C++ 2013 crashes and you receive an "Illegal Instruction" exception.
Latest supported Visual C++ Redistributable downloads
This article provides download links for the latest Visual C++ Redistributable packages.
Latest supported Visual C++ Redistributable downloads
또는

님 DCS에 모드 깔고 하다가 화면 앰흑됨? ㅋㅋ ㅄ

다음 경로에서 모든 비공식 모드(unofficial mods)를 삭제하십시오.

C:\Users<User Name>\Saved Games\DCS\Mods\


그 다음 Cleanup 및 Repair를 실행하십시오.
(FAQ 페이지 참고) 
또는
DCS World (1.5.x, 2.5.x)가 시작 시 운지 합니다( 실행 불가 )

검은 화면이 나타난 후 파악 꼬라박습니다 ( 충돌 )
ㄴ님 그래픽 카드 DirectX 11을 지원함? 안해? 에반데; 

