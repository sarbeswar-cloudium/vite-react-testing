import Header from "./layout/Header"

function Contact() {
    const HtmlContent = ({content}) => {
        return (
            <>
                <div dangerouslySetInnerHTML={{ __html: content }} />
            </>
        )
    }

    const test = '<p>Hello<p/>'


    return (
        <>
        <Header/>
        <div className="mt-10">
            <h1>Contact</h1>
            <hr />
            <div className="">
                <HtmlContent content={test}/>
            </div>
        </div>
        </>
    )
}

export default Contact