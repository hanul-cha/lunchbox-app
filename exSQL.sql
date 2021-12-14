/* table, valuse생성 양식 */


/* CREATE TABLE "person" (
  "user_id" TEXT NOT NULL,
  "password" TEXT NOT NULL,
  "default_address" TEXT NOT NULL,
  "default_requset" TEXT,
  PRIMARY KEY ("user_id")
);

CREATE TABLE "menu" (
  "menu_name" TEXT NOT NULL,
  "menu_day" TEXT NOT NULL,
  "description" TEXT NOT NULL,
  PRIMARY KEY ("menu_name")
);

CREATE TABLE "ordered" (
  "order_id" SERIAL NOT NULL,
  "user_id" TEXT NOT NULL,
  "menu_name" TEXT NOT NULL,
  "quentity" INT NOT NULL,
  "address" TEXT NOT NULL,
  "what_time" TEXT NOT NULL,
  "etc" TEXT,
  "order_time" TIMESTAMPTZ DEFAULT now(),
  PRIMARY KEY ("order_id")
); */


/* what_time 타입을 조금 고려 해봐야 할듯?? 근데 어짜피 시간 받아서 뮤테이트 할거니 상관없긴함 */


INSERT INTO "person" (
	user_id, password, default_address, default_requset
) VALUES (
	'assistant0603',
	'123123',
	'서울시 노량진 어느동 어디호',
	'당근 싫어해요'
);

INSERT INTO "person" (
	user_id, password, default_address, default_requset
) VALUES (
	'sssmmm1234',
	'ssssss1234',
	'경기도 안산시 상록구',
	'오이 싫어해요'
);
INSERT INTO "person" (
	user_id, password, default_address
) VALUES (
	'ch9888123',
	'123456789',
	'경기도 안산시 상록구 본오동'
);

INSERT INTO "menu" (
	menu_name, menu_day, description
) VALUES (
	'샌드위치',
	'3일 뒤',
	'치즈, 양상추, 베이컨, 토마토등 신선한 재료로 만든 샌드위치'
);
INSERT INTO "menu" (
	menu_name, menu_day, description
) VALUES (
	'바지락 술찜',
	'모래',
	'간단한 술안주로 좋은 매뉴, 다음날 해장으로도 좋습니다'
);

INSERT INTO "ordered" (
	user_id, menu_name, quentity, address, what_time
) VALUES (
	'ch9888123',
	'봉골레 파스타',
	2,
    '경기도 안산시 상록구 본오동',
    '4:00 PM'
);

