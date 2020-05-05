# med-tracker

A medicine supply chain and distribution system.

composer archive create -t dir -n .

composer network install --card PeerAdmin@hlfv1 --archiveFile med-tracker@0.0.1.bna

composer network start --card PeerAdmin@hlfv1 --networkAdmin admin --networkAdminEnrollSecret adminpw --file networkadmin.card --networkName med-tracker --networkVersion 0.0.1

composer card import --file networkadmin.card

composer network ping --card admin@med-tracker

composer-rest-server
