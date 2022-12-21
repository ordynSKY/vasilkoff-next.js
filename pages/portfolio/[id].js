import { useRouter } from "next/router";
import { useContext } from "react";
import DataProvider, {
    DataContext,
} from "../../components/Context/DataContext";

export default function PortfolioSomePage() {
    const router = useRouter();
    const { id } = router.query;
    const context = useContext(DataContext);

    // console.log("context2", context.arrayData[id].title);

    return (
        <>
            {context.arrayData &&
                context.arrayData[id] &&
                context.arrayData[id].title}
        </>
    );
}
