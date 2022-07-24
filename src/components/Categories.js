
import CategoryItem from "./CategoryItem"
import { FlatList } from "react-native"

export default function Categories({categories, setTerm, term}) {
    return (
        <FlatList 
            data={categories}
            renderItem={(item) => {
            return <CategoryItem 
                name={item.item.name} 
                imageUrl={item.item.imageUrl} 
                index={item.index}
                active={item.item.name === term}
                handlePress={() => setTerm(item.item.name)}
                />
            }}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(category => category.name)}
        />
    )
    
}

