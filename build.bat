cd front
call npm install
call ng build -prod --build-optimizer --environment=prod --output-path=../api/public/almundo --base-href=/almundo/
cd ..
cd api
call npm install
start "http://localhost:3001/almundo"
node app.js