function Filters({categoryList, selected,setCategory}) {

    return (
        <div id="filters">
            {
            
                categoryList.map((item) => {
                    return (
                        <div className="fltr" onClick={e => setCategory(e.target.value)} >
                            <input className="flt-rdo" type="radio" id={item} checked={item === selected} value={item} />
                            <label className="flt-labl" htmlFor={item}>{item}</label>
                        </div>
                    )
                }

            )}
        </div>
    )
}

export default Filters;