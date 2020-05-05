/**
  * Trade a marble to a new player
  * @param {org.example.mynetwork.M2W} tx - the trade marble transaction
  * @transaction
  */ 


function M2W(tx) {
   return getParticipantRegistry('org.example.mynetwork.Wholesaler')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Trade a marble to a new player
  * @param {org.example.mynetwork.W2D} tx - the trade marble transaction
  * @transaction
  */ 


function W2D(tx) {
   return getParticipantRegistry('org.example.mynetwork.Distributor')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Trade a marble to a new player
  * @param {org.example.mynetwork.D2P} tx - the trade marble transaction
  * @transaction
  */ 


function D2P(tx) {
   return getParticipantRegistry('org.example.mynetwork.Pharmacist')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Trade a marble to a new player
  * @param {org.example.mynetwork.W2M} tx - the trade marble transaction
  * @transaction
  */ 


function W2M(tx) {
   return getParticipantRegistry('org.example.mynetwork.Manufacturer')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Trade a marble to a new player
  * @param {org.example.mynetwork.D2W} tx - the trade marble transaction
  * @transaction
  */ 


function D2W(tx) {
   return getParticipantRegistry('org.example.mynetwork.Wholesaler')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

/**
  * Trade a marble to a new player
  * @param {org.example.mynetwork.P2D} tx - the trade marble transaction
  * @transaction
  */ 


function P2D(tx) {
   return getParticipantRegistry('org.example.mynetwork.Distributor')
     .then(function(PRegistry) {
       return PRegistry.exists(tx.newOwner.getIdentifier())
     })
      .then(function(exists) {
       if(!exists) {
         throw Error('Invalid participant id')
       } else {
        return getAssetRegistry('org.example.mynetwork.Drug')
         .then(function (assetRegistry) {
          tx.drug.presentOwner = tx.newOwner;
          return assetRegistry.update(tx.drug);
      });
       }
     })
 } 

 /**
 * Devil can reject proposal made by human
 * @param {org.example.mynetwork.MRejectProposal} rejectProposal
 * @transaction
 */
async function rejectProposal(rejectProposal) {
    
  let proposal = rejectProposal.proposal;
  proposal.status = "REJECTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.MRejectProposal');
  await proposalRegistry.update(proposal);
}
/**
 * Devil can reject proposal made by human
 * @param {org.example.mynetwork.WRejectProposal} rejectProposal
 * @transaction
 */
async function rejectProposal(rejectProposal) {
    
  let proposal = rejectProposal.proposal;
  proposal.status = "REJECTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.WRejectProposal');
  await proposalRegistry.update(proposal);
}
/**
 * Devil can reject proposal made by human
 * @param {org.example.mynetwork.DRejectProposal} rejectProposal
 * @transaction
 */
async function rejectProposal(rejectProposal) {
    
  let proposal = rejectProposal.proposal;
  proposal.status = "REJECTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.DRejectProposal');
  await proposalRegistry.update(proposal);
}


 /**
 * Devil can accept proposal made by human
 * @param {org.example.mynetwork.MMakeDeal} acceptProposal
 * @transaction
 */
async function acceptProposal(acceptProposal) {
    
  let proposal = acceptProposal.proposal;
  proposal.status = "ACCEPTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.MMakeDeal');
  await proposalRegistry.update(proposal);
}
 /**
 * Devil can accept proposal made by human
 * @param {org.example.mynetwork.WMakeDeal} acceptProposal
 * @transaction
 */
async function acceptProposal(acceptProposal) {
    
  let proposal = acceptProposal.proposal;
  proposal.status = "ACCCEPTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.WMakeDeal');
  await proposalRegistry.update(proposal);
}
 /**
 * Devil can accept proposal made by human
 * @param {org.example.mynetwork.DMakeDeal} acceptProposal
 * @transaction
 */
async function acceptProposal(acceptProposal) {
    
  let proposal = acceptProposal.proposal;
  proposal.status = "ACCEPTED";
  
  let proposalRegistry = await getAssetRegistry('org.example.mynetwork.DMakeDeal');
  await proposalRegistry.update(proposal);
}
