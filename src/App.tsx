// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
// import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
import Layout from "./components/Layout.tsx";
import Counter from "./components/LessonFour/Counter.tsx";
import ClassCounter from "./components/LessonFour/ClassCounter.tsx";

// type PropsA = {
//     title: string,
//     description: string,
// }
//
// type PropsB = {
//     title: string,
//     description: string,
// }
//
// // UNION
// type Status = "Error" | "Info" | "Warning";
//
// // Tiples
// type Coordinates = [number, number];
//
// // Functions
// type ClickHandler = (event: MouseEvent) => void;
//
// // INTERSECTION
// type Props = PropsA & PropsB;
//
//
// interface PropsTwo {
//     title: string,
//     description: string,
// }
//
// interface PropsTwo {
//     price: number,
//     sort: number,
// }
// // PropsTwo = {title, description, price, sort}
//
// interface PropsThree extends PropsTwo {
//     image: string,
// }
// // PropsTwo = {title, description, price, sort, image}

function App() {


  return (
    <>
        {/*<LESSON TWO />*/}
        {/*<FunctionalComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<FunctionalComponent />*/}
        {/*<ClassComponent />*/}
        {/*<ArrowFunctionalComponent />*/}

       {/*<ArrowFunctionalComponentWithProps title="Heading 1"/>*/}
       {/*<ArrowFunctionalComponentWithProps*/}
       {/*   title="Second Title"*/}
       {/*   description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, consequuntur!"*/}
       {/*/>*/}

       {/*LESSON THREE */}
       {/*<Layout addClasses="bg-gray-50">*/}
          {/*<ArrowFunctionalComponentWithProps*/}
          {/*  title="Second Title"*/}
          {/*  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet, deserunt dicta excepturi fugit ipsa modi perferendis quo repellat voluptates."*/}
          {/*/>*/}
          {/*<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, reiciendis.</p>*/}
       {/*</Layout>*/}

       {/*LESSON FOUR */}
       <Layout addClasses="bg-gray-50">
          <Counter/>
          <ClassCounter/>
       </Layout>
    </>
  )
}

export default App
