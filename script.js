function chooseAdventure() {
  // Asks for name and begins the adventure!
  let namePrompt = prompt(`What's your name?`)

  let assistPrompt = prompt(
    `Hello ${namePrompt}! Who would you like to assist first? The actors (A),  Jack Donaghy (J), or Liz Lemon (L)?`
  )

  // If they choose the actors, Tracy and Jenna
  if (assistPrompt == 'A') {
    alert(
      `Tracy and Jenna are busy in the studio doing rehearsals. Maybe you should pick up their medicine for them while you are out running your other errands.`
    )

    let medicinePrompt = prompt(
      `Pick up the medicine (P) or ignore the dilemma (I) and keep to your assigned tasks.`
    )

    if (medicinePrompt == 'P') {
      alert(
        `You arrive at the pharmacy but the place is packed! You're in a bit of a hurry... Luckily Dr. Spaceman's office is nearby. You could go there and grab some medication quickly or stay in line.`
      )
      let pharmPrompt = prompt(
        `Do you stay (S) or go to Dr. Spaceman's office (D)?`
      )
      if (pharmPrompt == 'S') {
        alert(
          `Props to your patience! You waited in line and picked up the correct medication for Tracy and Jenna. Not the most exciting first day but you proved you are reliable! Click OK to play again!`
        )
        chooseAdventure()
      } else if (pharmPrompt == 'D') {
        alert(
          `Should not have relied on Dr. Spaceman... Tracy is on the freeway pretending to be a Jedi. Must have grabbed some bad medication. Click OK to play again!`
        )
        chooseAdventure()
      }
    } else if (medicinePrompt == 'I') {
      let ignorePrompt = prompt(
        `You decided not to go out of your way. The actors didn't appreciate that. As a result the whole crew has to stay late to finish! You stay to grab coffee for the crew (C) or clean the actors' dressing rooms (D)`
      )

      if (ignorePrompt == 'C') {
        alert(
          `You spend a long first day at work and end up spilling coffee over your page uniform. You've only got the one so you'll need to wash it before you arrive tomorrow morning. Click OK to play again!`
        )
        chooseAdventure()
      } else if (ignorePrompt == 'D') {
        alert(
          `It's going to take more than a day to clean these dressing rooms. Hopefully tomorrow you'll get some help from the other pages. Click OK to play again!`
        )
        chooseAdventure()
      }
    }
  }

  // If they choose Jack
  else if (assistPrompt == 'J') {
    let assistJack = prompt(
      `There's a big tour group coming along. Do you take them on a tour of the TGS set (T) or keep to the hallways? (H)`
    )

    if (assistJack == 'T') {
      alert(
        `Your tour group is impressed. The TGS set was a great way to get the public excited about the show. Jack is happy with your results. Click OK to play again!`
      )
      chooseAdventure()
    } else if (assistJack == 'H') {
      alert(
        `Your tour group doesn't seem that interested. As it's your first day you don't know all that much about the studio. Try again tomorrow. Click OK to play again!`
      )

      chooseAdventure()
    }
  }

  // If they choose Liz
  else if (assistPrompt == 'L') {
    let floorPrompt = prompt(
      `Liz is a busy woman and you don't have her schedule on hand. Pick a floor to get to on the elevator and see if you can find her (###).`
    )

    let floorInt = parseInt(floorPrompt)

    if (floorInt > 80 && floorInt <= 100) {
      let jackLiz = prompt(
        `She's talking to Jack at the moment! Interrupt (I) or check in with Jack's assistant (C) first?`
      )
      if (jackLiz == 'I') {
        alert(
          `You interrupt the meeting but unfortunately hear some embarassing childhood story of Liz's. She doesn't seem all too embarassed herself but you find yourself questioning why you applied to be a page... Click OK to play again!`
        )
        chooseAdventure()
      } else if (jackLiz == 'C') {
        alert(
          `Jack's assistant helps set up a meeting with Liz for you. Guess you'll just go find the writers and wait until she's free! Click OK to play again!`
        )
        chooseAdventure()
      }
    } else if (floorInt < 80 && floorInt > 30) {
      let officeLiz = prompt(
        `Liz is hanging out in the writer's room. Stop to chat with the other writers (W) or knock (K) on her door?`
      )
      if (officeLiz == 'W') {
        alert(
          `The writers run some sketches by you! It's a great first day. Click OK to play again!`
        )
        chooseAdventure()
      } else if (officeLiz == 'K') {
        alert(
          `Liz was just editing some last scripts for the upcoming show. She's happy you are here to help! This is sure to leave a good impression. Click OK to play again!`
        )
        chooseAdventure()
      }
    } else {
      let setLiz = prompt(
        `She's down at the set doing last minute runs with the crew. Seems busy but you are supposed to help. Interrupt (I) or wait (W) until called upon?`
      )
      if (setLiz == 'I') {
        alert(
          `Everyone is behind time and interrupting didn't seem to help. She's even more upset so you sit back down and check in with the other pages... Click OK to play again!`
        )
        chooseAdventure()
      } else if (setLiz == 'W') {
        alert(
          `It was a good idea to be patient and let her do her thing. You are able to get the crew back on track and eventually everyone gets to go home early!.. Click OK to play again!`
        )
        chooseAdventure()
      }
    }
  }

  // If they didn't choose any of the three options
  else {
    let defaultAssist = prompt(
      `You didn't choose to help any of the senior staff! The head page wants to know if you are really committed to this page program. Respond (Y/N)`
    )
    if (defaultAssist == 'Y') {
      let headPagePrompt = prompt(
        `They test you by asking if you recall their name. Who is the head page?`
      )

      switch (headPagePrompt) {
        case 'Kenneth Parcell':
          alert(
            `Perfect! You remembered the name of the head page. You're on the right track at your new job.`
          )
          break
        case 'Hazel Wassername':
          alert(`We try not to talk about her...`)
          break
        default:
          alert(`Oh well we can't know everything!`)
      }

      alert(`It's a long way to the top! Click OK to play again!`)
      chooseAdventure()
    } else if (defaultAssist == 'N') {
      alert(
        `What is this, Horse-ville? 'Cause I'm surrounded by nay-sayers! On your way out you run into Dot Com, Tracy's close friend. He tells you he is enrolled in a coding bootcamp. As Tracy's media manager, Dot Com hopes to use his new skills to advertise all of Tracy's upcoming shows. Maybe you should look into that... Click OK to play again!`
      )
      chooseAdventure()
    }
  }
}

document
  .getElementById('startButton')
  .addEventListener('click', chooseAdventure)
