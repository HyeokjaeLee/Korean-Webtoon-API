![header](https://capsule-render.vercel.app/api?type=rect&color=gradient&height=100&section=header&text=Korea%20Webtoon%20API&fontSize=40&fontAlign=50&fontAlignY=50)

![NODE](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white)&nbsp;&nbsp;&nbsp;![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white) ![TYPESCRIPT](https://img.shields.io/badge/Typescript-3178c6?style=flat-square&logo=typescript&logoColor=white) ![Heroku](https://img.shields.io/badge/Heroku-430098?style=flat-square&logo=Heroku&logoColor=white) ![SQLite](https://img.shields.io/badge/SQLite-003B57?style=flat-square&logo=SQLite&logoColor=white) ![TypeORM](https://img.shields.io/badge/TypeORM-FF5A00?style=flat-square&logo=typeorm&logoColor=white)

# **📌 About**

여러 가지 플랫폼의 웹툰에 대한 정보를 제공하며 정보는 여섯시간 간격으로 갱신됩니다.

현재 정보가 제공되는 웹툰 플랫폼은 다음과 같습니다.

- 네이버웹툰
- 카카오웹툰
- 카카오페이지

# **🙏 Request**

웹툰 정보를 요청하는 API에 대한 자세한 설명은 [Swagger 문서](https://korea-webtoon-api-cc7dda2f0d77.herokuapp.com/api-docs)에서 확인할 수 있습니다.

# **<img src="https://www.docker.com/favicon.ico" style="width:1em; height:1em; vertical-align:middle;"> &nbsp;Docker**
 - 도커 이미지 빌드하기  
 ```
# Docker 이미지 빌드
docker build -t korean-webtoon-api .

# tar 아카이브 빌드
docker build -t korean-webtoon-api .
docker save -o korean-webtoon-api.tar korean-webtoon-api:latest
 ```  

 - 도커 이미지 실행하기  
``` 
docker run -d \
  --name korean-webtoon-api \
  --restart always \
  -e PORT=3000 \
  -e DOMAIN=http://localhost:3000 \
  -p 3000:3000 \
  korean-webtoon-api:latest
```

 - docker-compose.yml  
```
services:
  korean-webtoon-api:
    image: korean-webtoon-api:latest
    restart: always
    container_name: korean-webtoon-api
    environment:
      - PORT=3000
      - DOMAIN=http://localhost:3000
    ports:
      - 3000:3000
```

