# Simple Radio Standalone (SRS) 사용법
## 다운로드
https://github.com/ciribob/DCS-SimpleRadioStandalone/releases 에서 ``SRS-AutoUpdater.exe`` 다운로드

## 키세팅
* **남는 키 2개**가 필요함
* DCS 내 VoIP 키 할당 해제
* ``Controls``/``Radio 1``, ``Radio 2``에 VHF/UHF Push To Talk 에 사용할 키 할당
* ``Settings``/``Radio work as Push To Talk``을 ``ON``으로 전환
* 수신되는 소리가 너무 노이즈가 심하다면
     * ``Settings``/``Enable Ambient Cockpit Effects`` 및 ``Enable Ambient Intercom Effects``을 ``Off``로 전환

## SRS 사용
* SRS를 켠 상태로 서버 입장
* 기체의 VHF/UHF 설정과 자동으로 연동됨
* VHF/UHF Push To Talk 키를 누르면서 말 하기
* ``Shift+Ctrl+Esc``를 눌러 누가 말 하고 있는지 확인 가능

## 문제 해결
* 자동으로 연결이 되지 않는다면 서버 주소에 ``49.173.84.21:5002`` 붙여넣기 후 ``CONNECT`` 클릭
* 소리가 들리지 않는다면 Microphone과 Speaker 아웃풋이 올바르게 잡혀 있는지 확인
* ``Shift+Ctrl+Esc``를 눌렀음에도 오버레이가 나타나지 않는다면 DCS 메인화면에서 DCS-SRS 모듈 아이콘이 보이는지 확인
    * 보이지 않는다면 설치 과정에서 DCS 스크립트 설치를 건너뛴 것으로 재설치 필요
* **기체의 V/UHF 라디오 조작법을 모른다면 미션 10-20분 전 도움 요청**
* **문제를 해결할 수 없다면 미션 10-20분 전 도움 요청**
