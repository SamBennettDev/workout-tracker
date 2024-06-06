export function calculateScore(weight: number, reps: number) {
  // Example weights for each metric
  const weightWeight = 1; // Weight has more importance
  const repsWeight = 0.6; // Reps have less importance compared to weight

  // Calculate scores for each metric
  const weightScore = weight * weightWeight;
  const repsScore = reps * repsWeight;

  // Total score is the sum of both metric scores
  const totalScore = weightScore + repsScore;

  // Return an object containing the total score along with the original weight and reps
  return totalScore;
}
