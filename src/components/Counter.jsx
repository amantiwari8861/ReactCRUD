import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../redux/slices/counterSlice'

export function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <div>
                <button
                    aria-label="Increment value"
                    className='bg-white p-2 rounded text-black'
                    onClick={() => dispatch(increment())}
                >
                    Increment
                </button>
                <span>{count}</span>
                <button
                    aria-label="Decrement value"
                    className='bg-white p-2 rounded text-black'
                    onClick={() => dispatch(decrement())}
                >
                    Decrement
                </button>
                <button
                    aria-label="Decrement value"
                    className='bg-white p-2 rounded text-black'
                    onClick={() => dispatch(incrementByAmount(100))}
                >
                    increment by 100
                </button>
            </div>
        </div>
    )
}