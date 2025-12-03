import React, { useState } from 'react';
import { Globe, ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react';

function UserInput() {
    const [FROM, setFrom] = useState('');
    const [exchange, setexchange] = useState('');
    const [TO, setTO]  = useState('');
    const [exchange1, setexchange1] = useState('');

  return (
    <main className="min-h-screen">
        <div className='grid md:grid-cols-2 gap-12 items-center mb-32'>
            <div className="mb-4">
                <label htmlFor="FROM"></label>
                <input
                    type="text"
                    value={FROM}
                    onChange={(e) => setFrom(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
    
            <div className="mb-4">
                <select
                    type="text"
                    value={exchange}
                    onChange={(e) => setexchange(e.target.value)}
                    placeholder='USD - US Dollars'
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
        <button type="button" className='place-content-center'>
            <img src="" alt="" />
        </button>
        <div >
            <div className="mb-4">
                <label htmlFor="TO"></label>
                <input
                    type="text"
                    value={TO}
                    onChange={(e) => setTO(e.target.value)}
                    placeholder="Enter amount"
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
            
    
            <div className="mb-4">
                <input
                    type='text'
                    value={exchange1}
                    onChange={(e) => setexchange1(e.target.value)}
                    placeholder='USD - US Dollars'
                    className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>
        </div>
    </main>
  );
} 

export default UserInput;