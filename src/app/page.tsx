"use client";

import {useState} from "react";

const NUMBER_RANGE: { min: number, max: number }[] = [
  {min: 5382000, max: 5399999},
  {min: 5400000, max: 5457999},
  {min: 5458000, max: 5488999},
  {min: 5489000, max: 5501561},
];

const SLICE_NUM = 3

export default function Home() {
  const [number, setNumber] = useState(0);

  return (
    <main className='h-screen w-screen'>
      <div className='p-10 h-[calc(100%_-_80px)]'>
        <input type='number' placeholder='Input Number' className='mb-6 border-b-gray-400 border-2'
               onChange={(e) => setNumber(Number.parseInt(e.target.value))}/>
        <div className="flex flex-row gap-16 items-start h-[90%]">
          <div className='flex-[4_4_0%] border-2 border-solid border-black h-14 flex justify-center'>
            <div className='flex-1'/>
            <div className='my-auto mx-auto flex-1 text-center'>
              Registration Desk
            </div>
            <div className={'flex-1 ' + (number > NUMBER_RANGE[NUMBER_RANGE.length - 1].max ? 'bg-blue-400' : '')}/>
          </div>
          {
            NUMBER_RANGE.map(({min, max}, index) =>
              <div key={index} className='flex-col flex-1 flex text-center self-stretch'>
                <div className='flex flex-col mb-4'>
                  <div>{min}</div>
                  <div>~</div>
                  <div>{max}</div>
                </div>
                <div className='flex-1 border-2 border-solid border-black flex flex-col self-stretch'>
                  {
                    Array(SLICE_NUM).fill(0).map((_, i) => {
                      const cellMin = min + (max - min) / SLICE_NUM * i;
                      const cellMax = min + (max - min) / SLICE_NUM * (i + 1);
                      return (
                        <div key={i}
                             className={'flex-1 ' + (cellMin <= number && number <= cellMax ? 'bg-blue-400' : '')}/>
                      );
                    })
                  }
                </div>
              </div>
            )
          }
          <div
            className={'flex-1 border-solid border-2 border-black self-stretch flex justify-center ' + (number > NUMBER_RANGE[NUMBER_RANGE.length - 1].max ? 'bg-blue-400' : '')}>
            <div className='my-auto text-center'>
              Input Desk
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
