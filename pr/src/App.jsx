import { useEffect, useState } from "react";
import './index.css'



function App() {

  let [geeta, setGeeta] = useState([])

  let getuser = () => {
    fetch('https://vedicscriptures.github.io/slok/1/1')
      .then(res => res.json())
      .then((data) => {
        setGeeta([data]);
      })
  }

  useEffect(() => {
    setTimeout(() => {
      getuser()
    })
  }, [])

  return (
    <>
      {
        geeta.map((g, i) => {
          console.log(g);
          return (
            <div className="min-h-screen bg-gray-100 p-4">
              <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
                Bhagavad Gita - Verse Viewer
              </h1>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLnHP6jOjL8pCZ2gKoHIxO_k3RezsibVh8w&s" alt="" />

              <div className="max-w-2xl mx-auto">
                {geeta.map((g, i) => (
                  <div
                    key={i}
                    className="bg-white shadow-lg rounded-2xl p-6 mb-6 border border-gray-200"
                  >
                    <div className="mb-4">
                      <h2 className="text-xl font-semibold text-blue-600">
                        Chapter {g.chapter} - Verse {g._id}
                      </h2>
                    </div>

                    <p className="text-gray-800 mb-2 text-lg leading-relaxed">{g.slok}</p>
                    <p className="text-gray-600 italic mb-4">{g.transliteration}</p>

                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-4">
                      <h3 className="font-semibold text-gray-700 mb-1">
                        {g.tej.author} (Hindi Translation)
                      </h3>
                      <p className="text-gray-700">{g.tej.ht}</p>
                    </div>

                    <div className="text-right text-sm text-gray-500">
                      Shiva :- {g.siva.author}
                      <br />
                      {g.siva.et}
                      <br />
                      {g.siva.ec}
                    </div>
                    <br />
                    <div className="text-right text-sm text-gray-500">
                      purohit :- {g.purohit.author}
                      <br />
                      {g.purohit.et}

                    </div>

                    <br />
                    <div className="text-right text-sm text-gray-500">
                      chinmay :- {g.chinmay.author}
                      <br />
                      {g.chinmay.hc}

                    </div>

                    <br />
                    <div className="text-right text-sm text-gray-500">
                    san :- {g.san.author}
                      <br />
                      {g.san.et}

                    </div>



                    <br />
                    <div className="text-right text-sm text-gray-500">
                    adi :- {g.adi.author}
                      <br />
                      {g.adi.et}

                    </div>

                    <br />
                    <div className="text-right text-sm text-gray-500">
                    gambir :- {g.gambir.author}
                      <br />
                      {g.gambir.et}

                    </div>

                    <br />
                    <div className="text-right text-sm text-gray-500">
                    madhav :- {g.madhav.author}
                      <br />
                      {g.madhav.sc}

                    </div>



                    <br />
                    <div className="text-right text-sm text-gray-500">
                    anand :- {g.anand.author}
                      <br />
                      {g.anand.sc}

                    </div>



                    <br />
                    <div className="text-right text-sm text-gray-500">
                    rams :- {g.rams.author}
                      <br />
                      {g.rams.ht}
                      <br />
                      {g.rams.hc}


                    </div>

                  </div>

                ))}
              </div>
            </div>
          );

        })
      }

    </>
  )
}

export default App
