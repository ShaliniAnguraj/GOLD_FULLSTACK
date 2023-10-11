import React from 'react';
import { Accordion, AccordionBody, Button } from "@material-tailwind/react";
import { useState } from "react";
import Layout from "../components/Layout/Layout"

const HomeScreen = () => {
  const [openAcc1, setOpenAcc1] = React.useState(true);
  const [openAcc3, setOpenAcc3] = React.useState(true);

  const handleOpenAcc1 = () => setOpenAcc1((cur) => !cur);
  const handleOpenAcc3 = () => setOpenAcc3((cur) => !cur);

  const [goldrate, setGoldrate] = useState();
  const [silverRate, setSilverRate] = useState();
  const [invalidGoldMessage, setInvalidGoldMessage] = useState(false);
  const [invalidSilverMessage, setInvalidSilverMessage] = useState(false);
  const [wastage, setWastage] = useState();
  const [goldweight, setGoldweight] = useState();
  const [silverWeight, setSilverWeight] = useState();
  const [goldamount, setGoldamount] = useState(0);
  const [silveramount, setSilverAmount] = useState(0);
  const [wastageamount, setWastageAmount] = useState(0);
  const [gstgold, setGSTGold] = useState(0);
  const [gstsilver, setGSTSilver] = useState(0);
  const [totalGoldAmount, setTotalGoldamount] = useState(0);
  const [totalSilverAmount, setTotalSilveramount] = useState(0);
  const [wastageingram, setWastageingram] = useState(0);

  function getGoldAmount() {
    if (goldrate && goldweight) {
      const goldAmount = goldrate * goldweight;
      const wastageAmount = (wastage / 100) * goldAmount;
      const GSTAmount = 0.03 * (goldAmount + wastageAmount);
      const totalGoldAmount = goldAmount + wastageAmount + GSTAmount;
      const wastageinGram = (wastage / 100) * goldweight;

      setGoldamount(goldAmount);
      setGSTGold(GSTAmount);
      setTotalGoldamount(totalGoldAmount);
      setWastageAmount(wastageAmount);
      setWastageingram(wastageinGram);
    } else {
      setInvalidGoldMessage(true);
    }
  }

  function getSilverAmount() {
    if (silverRate && silverWeight) {
      const silverAmount = silverRate * silverWeight;
      const GSTAmount = 0.03 * silverAmount;
      const totalSilverAmount = silverAmount + GSTAmount;

      setSilverAmount(silverAmount);
      setGSTSilver(GSTAmount);
      setTotalSilveramount(totalSilverAmount);
    } else {
      setInvalidSilverMessage(true);
    }
  }
  return (
    <>
    <Layout>
    <main className="rounded-md overflow-hidden bg-cover bg-center">
        <h1 className="flex font-extrabold text-2xl mt-8 justify-center text-pink-700">
          Hey! there Calculate your Gold and Silver Rate here...
        </h1>

        <section>
          <div className="grid grid-rows-1 text-black md:grid-cols-2 sm:grid-cols-2">
            <div className="w-full h-full justify-center items-center">
              <div className="flex justify-center px-4">
                <Accordion open={openAcc1}>
                  <div className="flex justify-around px-6 items-center mt-6">
                    <Button
                      className="bg-yellow-500 hover:bg-red-700  items-center text-black hover:text-white font-bold py-2 px-4 rounded"
                      onClick={handleOpenAcc1}
                    >
                      Gold Calculator
                    </Button>
                  </div>
                  <AccordionBody>
                    <form className="md:max-w-full sm:max-w-full">
                      <div className="input">
                        <label className="font-bold">
                          Gold rate in &#x20b9;
                        </label>
                        <div className="m-4">
                          <input
                            className="bg-gray-100 outline-2 placeholder-gray-500 text-gray-600 border border-black w-[300px] px-2 py-2 rounded-lg"
                            value= {goldrate || ''}
                            min={1}
                            onChange={(e) => setGoldrate(+e.target.value)}
                            required
                            placeholder="Enter Gold Rate"
                          />
                        </div>
                        <label className="font-bold">
                          Gold Weight in grams
                        </label>
                        <div className="m-4">
                          <input
                            className="bg-gray-100 outline-2 placeholder-gray-500 text-gray-600 border border-black w-[300px] px-2 py-2 rounded-lg"
                            required
                            type="number"
                            min={1}
                            value={goldweight || ''}
                            onChange={(e) => setGoldweight(+e.target.value)}
                            placeholder="Gold Weight in grams"
                          />
                        </div>
                        <label className="font-bold">Wastage in %</label>
                        <div className="m-4">
                          <input
                            className="bg-gray-100 outline-2 placeholder-gray-500 text-gray-600 border border-black w-[300px] px-2 py-2 rounded-lg"
                            required
                            type="number"
                            min={0}
                            value={wastage || ''}
                            onChange={(e) => setWastage(+e.target.value)}
                            placeholder="Wastage %"
                          />
                        </div>
                        {invalidGoldMessage && (
                          <p className="font-bold invalidMessage">
                            ** Invalid Values **
                          </p>
                        )}
                      </div>
                    </form>
                    <div className="flex justify-center items-center">
                      <button
                        className="h-10 px-8 m-2 font-bold text-xl text-indigo-100 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-red-500"
                        type="submit"
                        onClick={getGoldAmount}
                      >
                        Calculate
                      </button>
                    </div>
                    <table className="table justify-center">
                      <thead>
                        <tr>
                          <th>Description</th>
                          <th>Rate</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Actual Gold Rate</td>
                          <td>&#x20b9; {goldamount}</td>
                        </tr>
                        <tr>
                          <td>Wastage in amount ({wastage}%)</td>
                          <td>&#x20b9; {Math.round(wastageamount)}</td>
                        </tr>
                        <tr>
                          <td>GST (3%)</td>
                          <td>&#x20b9; {Math.round(gstgold)}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>&#x20b9; {Math.round(totalGoldAmount)}</td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="flex justify-center">
                      <p>*Wastage in grams: {wastageingram}</p>
                    </div>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
            <div className=" justify-center items-center sm:h-auto">
              <div className="flex justify-center items-center mt-4">
                <Accordion open={openAcc3}>
                  <div className="flex justify-around px-6 items-center">
                    <Button
                      className="bg-yellow-500 hover:bg-red-700  items-center text-black hover:text-white font-bold py-2 px-4 rounded"
                      onClick={handleOpenAcc3}
                    >
                      Silver Calculator
                    </Button>
                  </div>
                  <AccordionBody>
                    <form className="md:max-w-full sm:max-w-full">
                      <div className="input">
                        <label className="font-bold">
                          Silver rate in &#x20b9;
                        </label>
                        <div className="m-4">
                          <input
                            className="bg-gray-100 outline-2 placeholder-gray-500 text-gray-600 border border-black w-[300px] px-2 py-2 rounded-lg"
                            value={silverRate || ''}
                            onChange={(e) => setSilverRate(+e.target.value)}
                            required
                            placeholder="Enter Gold Rate"
                          />
                        </div>
                        <label className="font-bold">
                          Silver Weight in grams
                        </label>
                        <div className="m-4">
                          <input
                            className="bg-gray-100 outline-2 placeholder-gray-500 text-gray-600 border border-black w-[300px] px-2 py-2 rounded-lg"
                            required
                            type="number"
                            min={1}
                            value={silverWeight || ''}
                            onChange={(e) => setSilverWeight(+e.target.value)}
                            placeholder="Gold Weight in grams"
                          />
                        </div>

                        {invalidSilverMessage && (
                          <p className="font-bold invalidMessage">
                            ** Invalid Values **
                          </p>
                        )}
                      </div>
                    </form>
                    <div className="flex justify-center items-center">
                      <button
                        className="h-10 px-8 m-2 font-bold text-xl text-indigo-100 transition-colors duration-150 bg-yellow-500 rounded-lg focus:shadow-outline hover:bg-red-500"
                        type="submit"
                        onClick={getSilverAmount}
                      >
                        Calculate
                      </button>
                    </div>
                    <table className="table justify-center">
                      <thead>
                        <tr>
                          <th>Description</th>
                          <th>Rate</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td>Actual Silver Rate</td>
                          <td>&#x20b9; {silveramount}</td>
                        </tr>
                        <tr>
                          <td>GST (3%)</td>
                          <td>&#x20b9; {Math.round(gstsilver)}</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>&#x20b9; {Math.round(totalSilverAmount)}</td>
                        </tr>
                      </tbody>
                    </table>
                  </AccordionBody>
                </Accordion>
              </div>
            </div>
          </div>
        </section>
      </main>

    </Layout>

     
    </>
  )
}

export default HomeScreen