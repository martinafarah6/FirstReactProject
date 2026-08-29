function InfoCard()
{
    return(
        <div className="info-card">
            <img src={`${process.env.PUBLIC_URL}/myportfolio.jpg`}alt="Martina Farah" />
            <h1>Martina Farah</h1>
            <h2 className="age">20 Years Old</h2>
        </div>
    )
}
export default InfoCard
