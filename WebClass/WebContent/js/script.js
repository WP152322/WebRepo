$(document).ready(function() {
	$('#loginForm').submit(function() {
		// 자동 submit되는 기능을 막음
		event.preventDefault();

		// id, pwd값을 가져오기
		// document.getElementById("id").value
		var id = $('#id').val();
		var pwd = $('#pwd').val();

		// 서버로 post 방식으로 전송
		$.post("/WebClass/bloglogin", {
			id : id,
			pwd : pwd
		}, function(data) {
			// alert(data.form.id + "님 로그인되었습니다.");
			if(data.msg=="error"){
				var myModal = $('#myModal');
				myModal.modal();
				myModal.find('.modal-body').text("로그인에 실패하셨습니다.");
			} else{
				location.href="/WebClass/myblog/blog.jsp";
			}
		});
	});
});

$(document).ready(
		function() {
			$('#joinus').submit(
					function() {
						event.preventDefault();
						var name = $('#name').val();

						$.post("http://httpbin.org/post", {
							name : name
						}, function(data) {
							var myModal3 = $('#myModal3');
							myModal3.modal();
							myModal3.find('.modal-body').text(
									data.form.name + "님 회원가입이 완료되었습니다");
							var myModal2 = $('#myModal2');
							myModal2.modal('hide');
						});
					});
		});

function myModal2show() {
	var modal2 = $('#myModal2');
	modal2.modal();

}
