        // 프로세스
        // 1. 각각의 div를 해당하는 키보드로 입력했을 때, div에게 클래스를 추가해주기
        //  >> 디자인의 모습을 바꾸기 위해서
        // 2. 각각의 div에 키보드를 땠을 때, 클래스를 제거해주기

        window.addEventListener("keydown",(e)=>{   // 키보드를 입력했을 때
            // 사용자가 입력한 키값이 1이면 -> div의 첫번째 영역에 class를 추가
            // 사용자가 입력한 키값이 2이면 -> div의 두번째 영역에 class를 추가
            const div = document.getElementById(e.key);
            div.classList.add("pressed");
            
        })
        window.addEventListener("keyup",(e)=>{     // 키보드를 땠을 때
            const div = document.getElementById(e.key);
            div.classList.remove("pressed");

        })

        // 실습정리
        // 이벤트객체를 통해서 다양한 동적인 코딩 가능
        // 사용자가 입력한 값을 받아서 컴퓨터가 알아서 처리할 수 있게 만든다
        // 리듬게임 등과 같이, 사용자의 입력이 필요한 경우, 반드시 event 객체 필요