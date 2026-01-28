# 모듈 인증 실패 문제
Window Defender 를 활성화 해 뒀다면, 가끔 "모듈 인증 실패" 메시지와 함께 일정 기간 뒤 모듈을 사용할 수 없다는 무서운 경고를 받아보게 된다.

<img width="399" height="216" alt="스크린샷 2026-01-15 225257" src="https://github.com/user-attachments/assets/4a0cd7a5-5cb2-4010-84aa-a0604b041c35" />

다행이도 이 오류는 모듈 제작사가 어딘가로 추노했다거나, 계정 인증에서 문제가 생겼거나 하는 실존적 문제가 존재하는 것이 아닌 Windows Defender 가 모듈의 필수적인 파일을 바이러스로 인식해 지워버려 생기는 문제다.

아래 절차를 따라 격리된 모듈 파일을 복구하고, 다시 Window Defender가 모듈을 압수하지 않도록 예외 지정까지 마치자.

<img width="369" height="242" alt="스크린샷 2026-01-15 225614" src="https://github.com/user-attachments/assets/e7df51c8-6cfb-4c69-a1da-b2e4bd911199" />

먼저 보안 설정으로 들어가야 한다. Windows 키를 누른 뒤 보안을 입력해 설정을 곧바로 찾아볼 수 있다.

<img width="234" height="300" alt="스크린샷 2026-01-15 225623" src="https://github.com/user-attachments/assets/3a4dff1f-8686-4319-bf8a-57ca88983853" />
<img width="415" height="366" alt="스크린샷 2026-01-15 225630" src="https://github.com/user-attachments/assets/a9ec8137-6de0-466a-83f4-af025ee22c79" />

그 다음은 "바이러스 및 위협 방지" 로 들어간다. 그 다음 "현재 위협" 에서 "보호 기록" 을 눌러 Window Defender 가 삭제한 파일을 확인해보자.

<img width="524" height="423" alt="스크린샷 2026-01-15 225647" src="https://github.com/user-attachments/assets/7eb9831b-2901-4984-abd2-4d13ac0e2684" />

격리된 위협이 보여야만 한다. 이 격리된 위협이 모듈의 필수적인 파일이다. "작업" 을 눌러 "복원"을 선택해 파일을 복원하자. 여기까지 끝마쳤다면 이제 경고가 사라짐과 함께 모듈을 정상적으로 사용할 수 있다.

다만 설정은 변한 것이 없기 때문에, 문제가 반복되는 것을 막으려면 DCS 가 설치된 폴더를 바이러스 스캔에서 제외해야 한다. 다시 Windows Defender 메뉴로 돌아가, 아래 절차를 따라 DCS 가 설치된 폴더를 제외하자.

<img width="374" height="150" alt="스크린샷 2026-01-15 225710" src="https://github.com/user-attachments/assets/8e7174df-bbf2-4ffb-a912-02076c9962b1" />

<img width="570" height="179" alt="스크린샷 2026-01-15 225721" src="https://github.com/user-attachments/assets/e6b0aa18-78ed-4981-b11e-c022b118847c" />

<img width="555" height="325" alt="스크린샷 2026-01-15 225726" src="https://github.com/user-attachments/assets/fc9ffa51-e92f-4ec0-a0bd-77cd20af68d5" />

<img width="263" height="252" alt="스크린샷 2026-01-15 225730" src="https://github.com/user-attachments/assets/b06e17d8-4c05-46fd-b5af-b168fcea3bbc" />

<img width="531" height="337" alt="스크린샷 2026-01-15 225758" src="https://github.com/user-attachments/assets/504da6b7-ee39-4bd8-9428-28cae8163c0b" />
