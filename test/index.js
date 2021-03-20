const Client = require('../src/structures/Client');
const client = new Client();

client.login(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJKb2tlbiIsImV4cCI6MTYxNjI3NDI2MiwiaWF0IjoxNjE2MjcwNjYyLCJpc3MiOiJKb2tlbiIsImp0aSI6IjJwbjJiNmxwaG8zcmpjbjNuYzAwNThjMiIsIm5iZiI6MTYxNjI3MDY2MiwidXNlcklkIjoiN2FiYzFmODItMThlYi00ZTdjLTkyZTUtNGUyMGU3ZjlhMTA0In0.eNT7ONibJOop8Q8RQ43--7QMv3xqtZ53RCk968m9rMY",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJKb2tlbiIsImV4cCI6MTYxODg2MjY2MiwiaWF0IjoxNjE2MjcwNjYyLCJpc3MiOiJKb2tlbiIsImp0aSI6IjJwbjJiNmxwaTc0NjljbjNuYzAwNThkMiIsIm5iZiI6MTYxNjI3MDY2MiwidG9rZW5WZXJzaW9uIjoxLCJ1c2VySWQiOiI3YWJjMWY4Mi0xOGViLTRlN2MtOTJlNS00ZTIwZTdmOWExMDQifQ.ezO9sLQzNmTGVI_bjblBrg8K3GgEkYzAlT_YqmO_j3E"
);

client.on("addRoom", (r) => {
    if(r.id == 'cc4bd0a3-304f-4414-aefb-e60e01fec9e2') {
        r.send("hello")
    }
})

client.on("message", (message) => {
    
})