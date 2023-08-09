import React, { useState } from 'react'
import api from './api'

const MacrosCalculator = () => {
	const [recipes, setRecipes] = useState([])
	const [tdee, setTdee] = useState('')
	const [ingredient, setIngredient] = useState('')
	const [lastSearchTdee, setLastSearchTdee] = useState('')
	const [lastSearchIngredient, setLastSearchIngredient] = useState('')
	const [isSearching, setIsSearching] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const ITEMS_PER_PAGE = 10

	const findRecipes = async (searchIngredient, searchTdee, page = 1) => {
		if (!searchIngredient || !searchTdee) {
			console.error('Ingredient or TDEE is missing. Aborting API call.')
			return
		}

		setIsSearching(true)
		const from = (page - 1) * ITEMS_PER_PAGE
		const to = page * ITEMS_PER_PAGE
		const apiUrl = `/edamam/search?q=${searchIngredient}&calories=${searchTdee}&from=${from}&to=${to}`
		console.log('Making API request to:', apiUrl)

		try {
			const response = await api.get(apiUrl)

			if (!response.data) {
				throw new Error('No data received from the server')
			}
			setRecipes((prevRecipes) => [...prevRecipes, ...response.data.hits])
			setCurrentPage(page)
		} catch (error) {
			console.error('Error fetching data:', error)
			console.error(
				'Error details:',
				error.response ? error.response.data : 'No response data'
			)
		}
		setIsSearching(false)
	}

	const searchNewRecipes = () => {
		setRecipes([])
		setLastSearchTdee(tdee)
		setLastSearchIngredient(ingredient)
		findRecipes(ingredient, tdee, 1)
		setTdee('')
		setIngredient('')
	}

		return (
			<div>
				<input
					type='text'
					placeholder='Enter your TDEE'
					value={tdee}
					onChange={(e) => {
						const value = e.target.value
						if (!isNaN(value) || value === '') {
							setTdee(value)
						}
					}}
				/>
				<input
					type='text'
					placeholder='Enter ingredient'
					value={ingredient}
					onChange={(e) => setIngredient(e.target.value)}
				/>
				<button onClick={searchNewRecipes} disabled={isSearching}>
					Search For Recipe
				</button>

				{isSearching && <div>Searching...</div>}

				{recipes.length > 0 && (
					<div>
						<h3>Suggested Recipes</h3>
						{recipes.map((hit, index) => (
							<div key={index}>
								<h4>{hit.recipe.label}</h4>
								<img src={hit.recipe.image} alt={hit.recipe.label} />
								<p>Calories: {hit.recipe.calories.toFixed(2)}</p>
								<a
									href={hit.recipe.url}
									target='_blank'
									rel='noopener noreferrer'>
									View Full Recipe
								</a>
							</div>
						))}
						<button
							onClick={() =>
								findRecipes(
									lastSearchIngredient,
									lastSearchTdee,
									currentPage + 1
								)
							}
							disabled={isSearching}>
							More Recipes Click !
						</button>
					</div>
				)}
			</div>
		)
}

export default MacrosCalculator
