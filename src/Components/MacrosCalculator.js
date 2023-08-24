import React, { useState } from 'react'
import api from './api'
import './styles/Calculator.css'

const MacrosCalculator = () => {
	const [recipes, setRecipes] = useState([])
	const [tdee, setTdee] = useState('')
	const [ingredient, setIngredient] = useState('')
	const [lastSearchTdee, setLastSearchTdee] = useState('')
	const [lastSearchIngredient, setLastSearchIngredient] = useState('')
	const [isSearching, setIsSearching] = useState(false)
	const [currentPage, setCurrentPage] = useState(1)
	const [tdeeError, setTdeeError] = useState(false)
	const [ingredientError, setIngredientError] = useState(false)

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
		setTdeeError(false)
		setIngredientError(false)

		if (!tdee) {
			setTdeeError(true)
			return
		}

		if (!ingredient) {
			setIngredientError(true)
			return
		}

		setRecipes([])
		setLastSearchTdee(tdee)
		setLastSearchIngredient(ingredient)
		findRecipes(ingredient, tdee, 1)
		setTdee('')
		setIngredient('')
	}

	return (
		<div className='content'>
			<h1>Creating dishes with what you have...</h1>
			<h5>
				Have some leftover bread slices, a lone onion, and some milk? <br />
				recipe search tool to discover dishes you can whip up, ensuring no food{' '}
				<br />
				is wasted and only minimal additional ingredients are required.
			</h5>
			<h3>How many calories would you like in this dish?</h3>
			<input
				className={`input-box1 ${tdeeError ? 'error' : ''}`}
				type='text'
				placeholder='Enter desired calories'
				value={tdee}
				onChange={(e) => {
					const value = e.target.value
					if (!isNaN(value) || value === '') {
						setTdee(value)
					}
				}}
			/>
			{tdeeError && (
				<p className='error-message' style={{ color: 'red' }}>
					Please enter desired calories.
				</p>
			)}

			<h3>What ingredients do you have or prefer in your dish?</h3>

			<input
				className={`input-box ${ingredientError ? 'error' : ''}`}
				type='text'
				placeholder='Enter ingredient e.g. chicken, garlic, pasta'
				value={ingredient}
				onChange={(e) => setIngredient(e.target.value)}
			/>
			{ingredientError && (
				<p className='error-message' style={{ color: 'red' }}>
					Please enter an ingredient.
				</p>
			)}
			<button
				onClick={searchNewRecipes}
				disabled={isSearching}
				style={{
					display: 'block',
					margin: '10px 0 30px 0',
					borderRadius: '10px',

					padding: '10px 20px',
					fontSize: '16px',
					background: '#d2691e',
					color: '#fff',
					border: '10px',
					cursor: 'pointer',
					transition: 'background-color 0.3s ease-in-out',
					overflow: 'hidden',
				}}
				onMouseEnter={(e) => {
					e.target.style.backgroundColor = '#7b1113'
				}}
				onMouseLeave={(e) => {
					e.target.style.backgroundColor = '#d2691e'
				}}>
				Search For Recipe
			</button>

			{isSearching && <div>Searching...</div>}

			{recipes.length > 0 && (
				<div className='suggested-recipes'>
					<h1>Suggested Recipes</h1>
					<div className='recipe-grid'>
						{recipes.map((hit, index) => (
							<div className='recipe-item' key={index}>
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
					</div>
					<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<button
						onClick={() =>
							findRecipes(lastSearchIngredient, lastSearchTdee, currentPage + 1)
						}
						disabled={isSearching}
						style={{
							display: 'block',
							margin: '10px 0 30px 0',
							borderRadius: '10px',
							padding: '10px',
							fontSize: '16px',
							background: '#d2691e',
							color: '#fff',
							border: 'none',
							cursor: 'pointer',
							overflow: 'hidden',
						}}>
						More Recipes Click !
					</button>
					</div>
				</div>
			)}
		</div>
	)
}

export default MacrosCalculator
