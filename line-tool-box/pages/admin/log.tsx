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
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">IP</th>
              <th className="px-6 py-3">Token</th>
              <th className="px-6 py-3">User Agent</th>
            </tr>
          </thead>
          <tbody>
            {log.map((item, index) => {
              return (
                <tr key={index} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
                  <td className="px-6 py-4">{item.time}</td>
                  <td className="px-6 py-4">{item.ip}</td>
                  <td className="px-6 py-4">{item.token !== "" ? item.token : "None"}</td>
                  <td className="px-6 py-4">{item.ua}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}
