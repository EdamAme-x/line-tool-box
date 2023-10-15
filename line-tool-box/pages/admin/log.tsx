import { useEffect, useState } from "react";
type Log = {
  time: string;
  ip: string;
  token: string;
  ua: string;
};

export default function Logger() {
  let datas: Log[] = [
    {
      time: "test",
      ip: "test.test.test.test",
      token: "test",
      ua: "a",
    },
  ];

  const [log, setLog] = useState(datas);

  useEffect(() => {
    fetch("/api/get-log")
      .then((res) => res.text())
      .then((data) => {
        if (data.length >= 2) {
            data = data.substring(1, data.length - 1);
        }
        const a = data.split("__ONE__");
        let b = [];

        for (let i = 0; i < a.length; i++) {
          let c = a[i].split("__DATA__");
          console.log(c);
          const time = c[0];
          const ip = c[1];
          const token = c[2];
          const ua = c[3];

          b.push({
            time,
            ip,
            token,
            ua,
          });
        }

        console.log(b);

        setLog(b.reverse());
      });
  }, []);

  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            <th>Date</th>
            <th>IP</th>
            <th>Token</th>
            <th>User Agent</th>
          </tr>
        </thead>
        <tbody>
         {
          log.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.time}</td>
                <td>{item.ip}</td>
                <td>{item.token !== "" ? item.token : "None"}</td>
                {/* <td>{item.ua}</td> */}
                <td>Test</td>
              </tr>
            );
          })
         }
        </tbody>
      </table>
    </>
  );
}
